import { createContext, useState } from "react";
import CardVisual from "./GameItems/Card";
import DiscardPiles from "./GameItems/DiscardPiles";

export enum Color {
    Yellow = "yellow",
    Blue = "blue",
    Green = "green",
    White = "white",
    Red = "red"
};

export const ALL_COLORS = [Color.Yellow, Color.Blue, Color.Green, Color.White, Color.Red];

interface Card {
    color: Color;
    value: number;
};

interface GameState {
    deck: Card[];
    player1Hand: Card[];
    player2Hand: Card[];
    discardPiles: Card[][];
    player1Expeditions: Card[][];
    player2Expeditions: Card[][];
};

const GameStateContext = createContext<GameState | undefined>(undefined);


const Game = () => {
    const [gameState, setGameState] = useState<GameState>();

    

    function GenerateDeck() {
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
                deck.push({ color: color, value: 1 });
            }
        }

        // shuffle deck
        deck.sort(() => Math.random() - 0.5);
        return deck;
    }

    function GameStart() {
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

        setGameState({
            deck: deck,
            player1Hand: player1Hand,
            player2Hand: player2Hand,
            discardPiles: discardPiles,
            player1Expeditions: player1Expeditions,
            player2Expeditions: player2Expeditions
        });
    }

    return (
        <GameStateContext.Provider value={gameState}>

            <DiscardPiles />
        
        </GameStateContext.Provider>
    );
}

export default Game;