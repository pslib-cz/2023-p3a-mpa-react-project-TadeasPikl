import { ReducerAction } from "../GameStateContext";
import { Card, GameState } from "../ItemTypes";
import { GetExpeditionScore } from "./DeckManager";


export function PerformAITurn(state: GameState): GameState {
    
    return state;
}





function EvaluateTurn(state: GameState): number { // higher is better for AI, lower is better for player
    let score = 0;

    // add for own expeditions
    for (const expedition of state.players[1].expeditions) {
        score += GetExpeditionScore(expedition);
    }

    // subtract for opponent's expeditions
    for (const expedition of state.players[0].expeditions) {
        score -= GetExpeditionScore(expedition);
    }

    return score;
}


function GetAllPlayActions(state: GameState, playerNum: number) {
    let actions = [];
    let player = state.players[playerNum];
    let hand = player.hand;

    for (let i = 0; i < hand.length; i++) {
        for (let j = 0; j < player.expeditions.length; j++) {
            if (hand[i].value >= player.expeditions[j][player.expeditions[j].length - 1].value) {
                actions.push({type: "PLAY", cardIndex: i, player: 1, expedition: j});
            }	
        }
    }

    for (let i = 0; i < hand.length; i++) {
        actions.push({type: "DISCARD", cardIndex: i, player: 1});
    }

   

}

function GetAllDrawActions(state: GameState, playerNum: number) {
    let actions = [];

    actions.push({type: "BASIC_DRAW", player: 1});

    for (let i = 0; i < state.discardPiles.length; i++) {
        if (state.discardPiles[i].length > 0) {
            actions.push({type: "DISCARD_PILE_DRAW", pileIndex: i, player: 1});
        }
    }

    return actions;
}