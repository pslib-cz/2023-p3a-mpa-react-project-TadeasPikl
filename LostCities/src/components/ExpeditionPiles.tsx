import React from 'react';
import { ALL_COLORS } from '../Consts';
import ExpeditionPile from "./ExpeditionPile";

interface ExpeditionPilesProps {
    player: boolean;
}

const ExpeditionPiles: React.FC<ExpeditionPilesProps> = ({player}) => {
    return (
        <div className='card-piles card-piles--expeditions'>

            {ALL_COLORS.map((color) => (
                <ExpeditionPile color={color} player={player} />
            ))}
        </div>
    );
};

export default ExpeditionPiles;