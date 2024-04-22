export enum Color {
    Yellow = "yellow",
    Blue = "blue",
    Green = "green",
    White = "white",
    Red = "red"
};

export interface Card {
    color: Color;
    value: number;
};

export type GameState = {
    deck: Card[];
    player1Hand: Card[];
    player2Hand: Card[];
    discardPiles: Card[][];
    player1Expeditions: Card[][];
    player2Expeditions: Card[][];
};


export const ALL_COLORS = [Color.Yellow, Color.Blue, Color.Green, Color.White, Color.Red];
export const COLOR_NUMS = {
    "yellow": 0,
    "blue": 1,
    "green": 2,
    "white": 3,
    "red": 4
}