export enum Color {
    Yellow = "yellow",
    Blue = "blue",
    Green = "green",
    White = "white",
    Red = "red"
};

export type Card = {
    color: Color;
    value: number; // 0 = wager cards, 2-10 = number cards
    handIndex?: number; // null if not in hand
};

export enum TurnStage {
    PLAY,
    DRAW,
    OPPONENT
}

export type GameState = {
    deck: Card[];
    turnStage: TurnStage;
    player1Hand: Card[];
    player2Hand: Card[];
    discardPiles: Card[][];
    player1Expeditions: Card[][];
    player2Expeditions: Card[][];
};
