import React, { useContext } from 'react';
import CardVisual from "./Card";
import { GameStateContext } from '../GameStateContext';
import { Color } from '../ItemTypes';
import { COLOR_NUMS } from '../Consts';

interface DiscardPileProps {
    color: Color;
}

const DiscardPile: React.FC<DiscardPileProps> = ({color}) => {
    const gameState = useContext(GameStateContext);

    return (
        <div className={"pile__" + color}>
            {
                gameState?.discardPiles[COLOR_NUMS[color]].map((card) => (
                    <CardVisual color={card.color} value={card.value} />
                ))
            }
        </div>
    );
};

export default DiscardPile;