import React, { createContext, useReducer } from 'react';
import { GameState, TurnStage } from './ItemTypes';
import { AddToExpedition, DiscardCard, DrawFromDeck, DrawFromDiscardPile, StartGame } from './gameLogic/DeckManager';



export type ReducerAction = 
    { type: "BASIC_DRAW", player: number } |
    { type: "DISCARD_PILE_DRAW", pileIndex: number, player: number } |
    { type: "PLAY", cardIndex: number, player: number, expedition: number } |
    { type: "DISCARD", cardIndex: number, player: number }

function ActionReducer(state: GameState, action: ReducerAction) {
    switch (state.turnStage) {
        case TurnStage.PLAY:
            switch (action.type) {
                case "PLAY":
                    return AddToExpedition(state, action.cardIndex, action.expedition, action.player);
                case "DISCARD":
                    return DiscardCard(state, action.cardIndex, action.player);
                default:
                    return state;
            }
        case TurnStage.DRAW:
            switch (action.type) {
                case "BASIC_DRAW":
                    return DrawFromDeck(state, action.player);
                case "DISCARD_PILE_DRAW":
                    return DrawFromDiscardPile(state, action.pileIndex, action.player);
                default:
                    return state;
            }
        default:
            return state;
    }
}



const GameStateContext = createContext<GameState | undefined>(undefined);
const DispatchContext = createContext<React.Dispatch<ReducerAction> | undefined>(undefined);

const GameStateProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

    const [gameState, dispatch] = useReducer(ActionReducer, null, StartGame);

    return (
        <GameStateContext.Provider value={gameState}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </GameStateContext.Provider>
    );
};

export { GameStateContext, DispatchContext, GameStateProvider };