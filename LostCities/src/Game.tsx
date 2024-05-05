import DiscardPiles from "./components/DiscardPiles";
import ExpeditionPiles from "./components/ExpeditionPiles";
import HandDisplay from "./components/Hand";
import DrawPile from "./components/DrawPile";
import { useContext } from "react";
import { GameStateContext } from "./GameStateContext";
import { TurnStage } from "./ItemTypes";


const Game = () => {
    const state = useContext(GameStateContext);

    return (
        <>
            {state?.turnStage === TurnStage.GAME_OVER ?
            null
            :
            <>
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