import { createContext, useState, useEffect } from "react";
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

interface ColoredPiles {
    [Color.Yellow]: Card[];
    [Color.Blue]: Card[];
    [Color.Green]: Card[];
    [Color.White]: Card[];
    [Color.Red]: Card[];
};

interface GameState {
    deck: Card[];
    player1Hand: Card[];
    player2Hand: Card[];
    discardPiles: ColoredPiles;
    player1Expeditions: ColoredPiles;
    player2Expeditions: ColoredPiles;
};

export const GameStateContext = createContext<GameState | undefined>(undefined);


const Game = () => {
    const [gameState, setGameState] = useState<GameState>();


    useEffect(() => {
        GameStart();
    }, []);


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
                deck.push({ color: color, value: 0 });
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
        let discardPiles: ColoredPiles = { 
            [Color.Yellow]: [],
            [Color.Blue]: [],
            [Color.Green]: [],
            [Color.White]: [],
            [Color.Red]: []
        };
        let player1Expeditions: ColoredPiles = { 
            [Color.Yellow]: [],
            [Color.Blue]: [],
            [Color.Green]: [],
            [Color.White]: [],
            [Color.Red]: []
        };
        let player2Expeditions: ColoredPiles = { 
            [Color.Yellow]: [],
            [Color.Blue]: [],
            [Color.Green]: [],
            [Color.White]: [],
            [Color.Red]: []
        };

        for (let i = 0; i < 8; i++) {
            player1Hand.push(deck.pop()!);
            player2Hand.push(deck.pop()!);
        }
        
        console.log(deck);
        console.log(player1Hand);
        console.log(player2Hand);

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

            <p>Game</p>
        
        </GameStateContext.Provider>
    );
}

export default Game;