import React, { useContext } from "react";
import DiscardPile from "./DiscardPile";
import { ALL_COLORS, GameStateContext } from '../Game';

const DiscardPiles = () => {
    const DiscardPiles = useContext(GameStateContext)?.discardPiles;


    return (
        <div className='Discards'>
            {ALL_COLORS.map((color) => (
                <DiscardPile color={color} />
            ))}
        </div>
    );
};

export default DiscardPiles;