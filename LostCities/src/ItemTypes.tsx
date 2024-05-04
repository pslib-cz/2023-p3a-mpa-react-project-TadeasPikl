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

export type Player = {
    hand: Card[];
    expeditions: Card[][];
    lastDiscardIndex: number | null;
};

export type GameState = {
    deck: Card[];
    turnStage: TurnStage;
    players: Player[];
    discardPiles: Card[][];
};
