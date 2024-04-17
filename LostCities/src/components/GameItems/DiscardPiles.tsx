import React from 'react';
import DiscardPile from "./DiscardPile";
import { Color, ALL_COLORS } from '../Game';

const DiscardPiles = () => {
    return (
        <div className='discards'>

            {ALL_COLORS.map((color) => (
                <DiscardPile color={color} />
            ))}
        </div>
    );
};

export default DiscardPiles;