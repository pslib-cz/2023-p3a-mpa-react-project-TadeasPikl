import { createContext, useEffect, useState } from "react";
import DiscardPiles from "./components/DiscardPiles";
import ExpeditionPiles from "./components/ExpeditionPiles";
import HandDisplay from "./components/HandDisplay";


const Game = () => {
    return (
        <>
            <ExpeditionPiles player={false} />
            <DiscardPiles />
            <ExpeditionPiles player={true} />
            <HandDisplay />
        </>
    );
}

export default Game;