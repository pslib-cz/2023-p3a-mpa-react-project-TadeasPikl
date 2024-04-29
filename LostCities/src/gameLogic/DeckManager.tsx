import { Card, GameState, TurnStage } from "../ItemTypes";
import { ALL_COLORS } from "../Consts";

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
        console.log(player1Hand);
        console.log(player2Hand);
        console.log(discardPiles);

    let state: GameState = {
        deck: deck,
        turnStage: TurnStage.PLAY,
        player1Hand: player1Hand,
        player2Hand: player2Hand,
        discardPiles: discardPiles,
        player1Expeditions: player1Expeditions,
        player2Expeditions: player2Expeditions
    };

    return state;
}



export function AddToExpedition(state: GameState, handIndex: number, expeditionIndex: number) {
    if (state.turnStage != TurnStage.PLAY) {
        return state;
    }
    
    var newState = state;
    var expedition = state.player1Expeditions[expeditionIndex];
    var card = state.player1Hand[handIndex];


}