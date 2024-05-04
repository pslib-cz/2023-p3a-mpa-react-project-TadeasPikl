import React from 'react';
import { ALL_COLORS } from '../Consts';
import ExpeditionPile from "./ExpeditionPile";

interface ExpeditionPilesProps {
    player: number;
}

const ExpeditionPiles: React.FC<ExpeditionPilesProps> = ({player}) => {
    return (
        <div className={"card-piles card-piles--expeditions" + (player != 0 ? " card-piles--expeditions__enemy" : "")}>
            {ALL_COLORS.map((color) => (
                <ExpeditionPile key={color} color={color} player={player} />
            ))}
        </div>
    );
};

export default ExpeditionPiles;