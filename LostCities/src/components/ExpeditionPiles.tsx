import React from 'react';
import { ALL_COLORS } from '../Consts';
import ExpeditionPile from "./ExpeditionPile";
import ExpeditionPileEnemy from './ExpeditionPileEnemy';

interface ExpeditionPilesProps {
    player: boolean;
}

const ExpeditionPiles: React.FC<ExpeditionPilesProps> = ({player}) => {
    return (
        <div className='card-piles card-piles--expeditions'>

            {ALL_COLORS.map((color) => (
                player
                ?
                <ExpeditionPile color={color} />
                :
                <ExpeditionPileEnemy color={color} />
            ))}
        </div>
    );
};

export default ExpeditionPiles;