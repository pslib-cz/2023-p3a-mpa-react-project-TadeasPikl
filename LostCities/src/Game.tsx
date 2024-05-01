import DiscardPiles from "./components/DiscardPiles";
import ExpeditionPiles from "./components/ExpeditionPiles";
import HandDisplay from "./components/Hand";
import DrawPile from "./components/DrawPile";


const Game = () => {
    return (
        <>
            <DrawPile />
            <div className="expedition-table">
                <ExpeditionPiles player={1} />
                <ExpeditionPiles player={0} />
            </div>
            <DiscardPiles />
            <HandDisplay />
        </>
    );
}

export default Game;