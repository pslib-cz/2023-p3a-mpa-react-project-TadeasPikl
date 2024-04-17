import React, { useState, useContext } from 'react';
import CardVisual from './Card';
import { Color, Card, GameStateContext, COLOR_NUMS } from '../Game';

interface DiscardPileProps {
    color: Color;
}

const DiscardPile: React.FC<DiscardPileProps> = ({color}) => {
    const [cards, setCards] = useState<Card[]>([]);
    
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