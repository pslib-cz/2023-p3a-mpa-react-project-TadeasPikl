import React from 'react';
import DiscardPile from "./DiscardPile";
import { Color, ALL_COLORS } from '../Game';

const ExpeditionPiles: React.FC = () => {
    return (
        <div className='Expeditions'>

            {ALL_COLORS.map((color) => (
                <DiscardPile color={color} />
            ))}
        </div>
    );
};

export default ExpeditionPiles;