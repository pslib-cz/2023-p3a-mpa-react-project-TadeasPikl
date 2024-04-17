import React from 'react';
import { Color, ALL_COLORS } from '../Game';
import ExpeditionPile from './ExpeditionPile';

interface ExpeditionPilesProps {
    player: boolean;
}

const ExpeditionPiles: React.FC<ExpeditionPilesProps> = ({player}) => {
    return (
        <div className='expeditions'>

            {ALL_COLORS.map((color) => (
                <ExpeditionPile color={color} player={player} />
            ))}
        </div>
    );
};

export default ExpeditionPiles;