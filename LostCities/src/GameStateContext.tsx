import React, { createContext, useState } from 'react';
import { Card, GameState } from './TypesConsts';
import { GenerateDeck } from './GameLogic/CardManager';

const GameStateContext = createContext<GameState | undefined>(undefined);

const GameStateProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    
    function StartGame() {
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
            player1Hand: player1Hand,
            player2Hand: player2Hand,
            discardPiles: discardPiles,
            player1Expeditions: player1Expeditions,
            player2Expeditions: player2Expeditions
        };

        return state;
    }

    const [gameState, setGameState] = useState<GameState>();

    return (
        <GameStateContext.Provider value={gameState}>
            {children}
        </GameStateContext.Provider>
    );
};

export { GameStateContext, GameStateProvider };