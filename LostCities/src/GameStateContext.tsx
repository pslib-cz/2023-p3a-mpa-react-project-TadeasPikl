import React, { createContext, useReducer } from 'react';
import { GameState, TurnStage } from './ItemTypes';
import { StartGame } from './gameLogic/DeckManager';



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
                    if (state.players[action.player].expeditions[action.expedition].length > 0
                        &&
                        state.players[action.player].hand[action.cardIndex].value != 0
                        &&
                        state.players[action.player].hand[action.cardIndex].value <= state.players[action.player].expeditions[action.expedition][state.players[action.player].expeditions[action.expedition].length-1].value) {
                            return state;
                    }
                    let newPlayers = state.players;
                    newPlayers[action.player].expeditions[action.expedition].push(newPlayers[action.player].hand.splice(action.cardIndex, 1)[0]);
                    let newState = {
                        ...state,
                        players: newPlayers,
                        turnStage: TurnStage.DRAW
                    }
                    //console.log(newState)
                    return newState;

                case "DISCARD":
                    return state;
                default:
                    return state;
            }
        case TurnStage.DRAW:
            switch (action.type) {
                case "BASIC_DRAW":
                    if (state.deck.length === 0) {
                        return state;
                    }
                    let newDeck = state.deck;
                    let newHand = state.players[action.player].hand;
                    newHand.push(newDeck.pop()!);

                    let newPlayers = state.players;
                    newPlayers[action.player].hand = newHand;
                    return {
                        ...state,
                        deck: newDeck,
                        players: newPlayers,
                        turnStage: TurnStage.PLAY
                    }

                case "DISCARD_PILE_DRAW":
                    return state; 
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