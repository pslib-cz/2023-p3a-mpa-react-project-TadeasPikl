import React, { createContext, useReducer } from 'react';
import { GameState, TurnStage } from './ItemTypes';
import { ExecuteAction, StartGame } from './gameLogic/DeckManager';
import { PerformAITurn } from './gameLogic/OpponentAI';



export type ReducerAction = 
    { type: "BASIC_DRAW", player: number } |
    { type: "DISCARD_PILE_DRAW", pileIndex: number, player: number } |
    { type: "PLAY", cardIndex: number, player: number, expedition: number } |
    { type: "DISCARD", cardIndex: number, player: number }


function ActionReducer(state: GameState, action: ReducerAction): GameState {
    if (state.deck.length === 0 && state.turnStage === TurnStage.DRAW) {
        // alert(
        //     "Game Over!" + "\n" +
        //     "Player: " + GetTotalScore(state.players[0].expeditions) + "\n" +
        //     "\"AI\": " + GetTotalScore(state.players[1].expeditions) + "\n" +
        //     (GetTotalScore(state.players[0].expeditions) > GetTotalScore(state.players[1].expeditions) ? "Player" : "AI") + " Has Won!"
        // );
        return {
            ...state,
            turnStage: TurnStage.GAME_OVER
        }
    }
    let newState = ExecuteAction(state, action);
    if (newState.turnStage === TurnStage.OPPONENT) {
        newState = PerformAITurn(newState);
    }
    return newState;
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