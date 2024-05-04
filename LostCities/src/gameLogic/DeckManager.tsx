import { Card, GameState, TurnStage } from "../ItemTypes";
import { ALL_COLORS, COLOR_NUMS } from "../Consts";

export function GenerateDeck() {
    let deck: Card[] = [];
    
    // expedition cards
    for (const color of ALL_COLORS) {
        for (let i = 2; i <= 10; i++) {
            deck.push({ color: color, value: i });
        }
    }

    // wager cards
    for (const color of ALL_COLORS) {
        for (let i = 0; i < 3; i++) {
            deck.push({ color: color, value: 0 });
        }
    }

    // shuffle deck
    deck.sort(() => Math.random() - 0.5);
    return deck;
}

export function StartGame() {
    let deck = GenerateDeck();
    let player1Hand: Card[] = [];
    let player2Hand: Card[] = [];
    let discardPiles: Card[][] = [[], [], [], [], []];
    let player1Expeditions: Card[][] = [[], [], [], [], []];
    let player2Expeditions: Card[][] = [[], [], [], [], []];

    for (let i = 0; i < 8; i++) {
        player1Hand.push(deck.pop()!);
        player2Hand.push(deck.pop()!);
    }

    let state: GameState = {
        deck: deck,
        turnStage: TurnStage.PLAY,
        players: [{hand: player1Hand, expeditions: player1Expeditions}, {hand: player2Hand, expeditions: player2Expeditions}],
        discardPiles: discardPiles,
    };

    console.log(state)

    return state;
}


export function AddToExpedition(state: GameState, handIndex: number, expeditionIndex: number, player: number): GameState {
    if (state.turnStage != TurnStage.PLAY) {
        return state;
    }

    // check if the card can be played
    let card = state.players[player].hand[handIndex];
    if (COLOR_NUMS[card.color] != expeditionIndex) {
        return state;
    }
    debugger;
    let topCard = state.players[player].expeditions[expeditionIndex][state.players[player].expeditions[expeditionIndex].length - 1];
    if (topCard != undefined && card.value < topCard.value) {
        return state;
    }

    let newPlayers = state.players;
    newPlayers[player].expeditions[expeditionIndex].push(newPlayers[player].hand.splice(handIndex, 1)[0]);
    let newState = {
        ...state,
        players: newPlayers,
        turnStage: TurnStage.DRAW
    }

    console.log(newState)

    return newState;
}