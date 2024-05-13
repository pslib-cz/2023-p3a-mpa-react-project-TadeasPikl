import DiscardPiles from "./components/DiscardPiles";
import ExpeditionPiles from "./components/ExpeditionPiles";
import HandDisplay from "./components/Hand";
import DrawPile from "./components/DrawPile";
import { useContext } from "react";
import { GameStateContext } from "./GameStateContext";
import { TurnStage } from "./ItemTypes";
import { GetTotalScore } from "./gameLogic/DeckManager";


const Game = () => {
    const state = useContext(GameStateContext);

    return (
        <>
            {state?.turnStage === TurnStage.GAME_OVER ?
            <div className="game-over">
                <h1>Game Over</h1>
                <h2>{GetTotalScore(state.players[0].expeditions) > GetTotalScore(state.players[1].expeditions) ? "Player Wins!" : "AI Wins!"}</h2>
                <h3>Player Score: {GetTotalScore(state.players[0].expeditions)}</h3>
                <h3>AI Score: {GetTotalScore(state.players[1].expeditions)}</h3>
                <a href=".">Play Again</a>
            </div>
            :
            <>
                <a href="./lost-cities-rulebook.pdf" className="rules" target="_blank">Rules</a>
                <DrawPile />
                <div className="expedition-table">
                    <ExpeditionPiles player={1} />
                    <ExpeditionPiles player={0} />
                </div>
                <DiscardPiles />
                <HandDisplay />
            </>
            }
        </>
    );
}

export default Game;