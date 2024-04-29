import React, { createContext, useReducer } from 'react';
import { GameState, TurnStage } from './ItemTypes';
import { StartGame } from './gameLogic/DeckManager';



export type ReducerAction = 
    { type: "BASIC_DRAW" } |
    { type: "DISCARD_PILE_DRAW", pileIndex: number } |
    { type: "PLAY", cardIndex: number, playSpace: any } |
    { type: "DISCARD", cardIndex: number }

function ActionReducer(state: GameState, action: ReducerAction) {
    switch (state.turnStage) {
        case TurnStage.PLAY:
            return state;
        case TurnStage.DRAW:
            switch (action.type) {
                case "BASIC_DRAW":
                    if (state.deck.length === 0) {
                        return state;
                    }
                    let newDeck = state.deck;
                    let newHand = state.player1Hand;
                    newHand.push(newDeck.pop()!);
                    return {
                        ...state,
                        deck: newDeck,
                        player1Hand: newHand,
                        turnStage: TurnStage.OPPONENT
                    }
                default:
                    return state;



            }
                

        default:
            return state;
    }
}



const GameStateContext = createContext<GameState | undefined>(undefined);
const DispatchContext = createContext<React.Dispatch<any> | undefined>(undefined);

const GameStateProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

    const [gameState, dispatch] = useReducer(ActionReducer, StartGame());

    return (
        <GameStateContext.Provider value={gameState}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </GameStateContext.Provider>
    );
};

export { GameStateContext, DispatchContext, GameStateProvider };