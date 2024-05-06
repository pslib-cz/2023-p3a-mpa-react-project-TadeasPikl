import { COLOR_NUMS, NUMBER_OF_RANDOM_ACTIONS_SIMULATED } from "../Consts";
import { ReducerAction } from "../GameStateContext";
import { GameState, TurnStage } from "../ItemTypes";
import { AddToExpedition, DiscardCard,DrawFromDiscardPile, GetExpeditionScore, ExecuteAction } from "./DeckManager";


// SINGLE TURN MINIMAX


export function PerformAITurn(state: GameState): GameState {
    // debugger;
    let playAction = ChooseAction(state, GetAllPlayActions(state, 1));
    // let playAction = GetAllPlayActions(state, 1)[Math.floor(Math.random() * GetAllPlayActions(state, 1).length)];

    // console.group("AI TURN");
    // console.log(state.players[1].hand);
    // console.log("AI PLAY ACTION");
    // console.log(playAction);

    let newState = ExecuteAction(state, playAction);

    // debugger;
    let drawAction = ChooseAction(newState, GetAllDrawActions(newState, 1));
    //let drawAction = GetAllDrawActions(newState, 1)[Math.floor(Math.random() * GetAllDrawActions(newState, 1).length)];
    // debugger;

    // console.log("AI DRAW ACTION");
    // console.log(drawAction);
    // console.groupEnd();

    newState = ExecuteAction(newState, drawAction);

    return {
        ...newState,
        turnStage: TurnStage.PLAY
    }
}



function ChooseAction(state: GameState, actions: ReducerAction[]): ReducerAction {
    let bestActions: ReducerAction[] = [];
    // debugger;
    let bestScore = GetActionScore(state, actions[0]);

    for (let action of actions) {
        let score = GetActionScore(state, action);
        if (score > bestScore) {
            bestScore = score;
            bestActions = [action];
        }
        else if (score == bestScore) {
            bestActions.push(action);
        }
    }

    return bestActions[Math.floor(Math.random() * bestActions.length)];
}



function GetActionScore(state: GameState, action: ReducerAction): number {
    // debugger;
    if (action.type == "BASIC_DRAW") {
        let finalScore = 0;

        for (let i = 0; i < NUMBER_OF_RANDOM_ACTIONS_SIMULATED; i++) {
            finalScore += EvaluateActionResult(SimulateAction(state, {type: "BASIC_DRAW", player: 1}), action);
        }

        return finalScore / NUMBER_OF_RANDOM_ACTIONS_SIMULATED;
    }
    return EvaluateActionResult(SimulateAction(state, action), action);
}



function GetPotentialExpeditionScore(state: GameState, player: number, expeditionIndex: number): number {
    let expedition = state.players[1].expeditions[expeditionIndex];

    let score = GetExpeditionScore(state.players[player].expeditions[expeditionIndex]);

    let currentlyPLayableCards = state.players[player].hand.filter(card => COLOR_NUMS[card.color] == expeditionIndex && card.value >= (expedition[expedition.length - 1] ?? {value: 0}).value).length;
    let predictedPlayableCards = (state.deck.length / 6) + currentlyPLayableCards;


    score += predictedPlayableCards;
    score += currentlyPLayableCards * 2;

    if (expedition.length + predictedPlayableCards >= 8) {
        score += 5;
    }
    
    return score;
}


function EvaluateActionResult(state: GameState, action: ReducerAction): number { // higher is better for AI, lower is better for player
    let score = 0;
    
    // debugger;

    switch (action.type) {
        case "PLAY":
            // debugger;
            let cardValue = state.players[1].hand[action.cardIndex].value
            let expedition = state.players[1].expeditions[COLOR_NUMS[state.players[1].hand[action.cardIndex].color]];
            if (cardValue > Math.min(...state.players[1].hand.map(card => card.value))) {
                return -100;
            }
            if ((expedition[expedition.length - 1] ?? {value: 0}).value - cardValue > 4) {
                score -= 20;
            }
            break;
        case "DISCARD":
            score -= 1;
            break;
        case "BASIC_DRAW":
            score -= 1;
            break;
        case "DISCARD_PILE_DRAW":
            score += 1;
            break;
    }



    let expeditions = state.players[1].expeditions;

    // add for potential score of own expeditions
    for (let i = 0; i < state.players[1].expeditions.length; i++) {
        score += GetPotentialExpeditionScore(state, 1, i);
    }

    // subtract for opponent's expeditions
    for (let i = 0; i < state.players[1].expeditions.length; i++) {
        score += GetPotentialExpeditionScore(state, 0, i);
    }

    // add for cards in hand
    for (let card of state.players[1].hand) {
        if (card.value > (expeditions[COLOR_NUMS[card.color]][expeditions[COLOR_NUMS[card.color]].length - 1] ?? {value: 0}).value) {
            score += card.value;
        }
        else {
            score -= 1;
        }
    }




    return score;
}


function SimulateDraw(state: GameState, playerNum: number): GameState {
    let knownDeck = state.deck.concat(state.players[playerNum == 1 ? 0 : 1].hand);
    let newPlayers = state.players;

    newPlayers[playerNum].hand.push(knownDeck[Math.floor(Math.random() * knownDeck.length)]);

    return {
        ...state,
        players: newPlayers
    }
}

function SimulateAction(state: GameState, action: ReducerAction): GameState {
    // debugger;
    let newState = structuredClone(state);
    switch (action.type) {
        case "PLAY":
            return AddToExpedition(newState, action.cardIndex, action.expedition, action.player);
        case "DISCARD":
            return DiscardCard(newState, action.cardIndex, action.player);
        case "BASIC_DRAW":
            return SimulateDraw(newState, action.player);
        case "DISCARD_PILE_DRAW":
            return DrawFromDiscardPile(newState, action.pileIndex, action.player);
        default:
            return newState;
    }
}



function GetAllPlayActions(state: GameState, playerNum: number): ReducerAction[] {
    let actions: ReducerAction[] = [];
    let player = state.players[playerNum];
    let hand = player.hand;

    for (let i = 0; i < hand.length-1; i++) {
        let j = COLOR_NUMS[hand[i].color];
        if (hand[i].value >= (player.expeditions[j][player.expeditions[j].length - 1] ?? {value: 0}).value) {
            actions.push({type: "PLAY", cardIndex: i, player: 1, expedition: j});
        }
    }

    for (let i = 0; i < hand.length-1; i++) {
        actions.push({type: "DISCARD", cardIndex: i, player: 1});
    }

    return actions;
}

function GetAllDrawActions(state: GameState, playerNum: number): ReducerAction[] {
    let actions: ReducerAction[] = [];

    actions.push({type: "BASIC_DRAW", player: 1});

    for (let i = 0; i < state.discardPiles.length; i++) {
        if (state.discardPiles[i].length > 0) {
            if (state.players[playerNum].lastDiscardIndex != i) {
                actions.push({type: "DISCARD_PILE_DRAW", pileIndex: i, player: playerNum});
            }
        }
    }

    return actions;
}