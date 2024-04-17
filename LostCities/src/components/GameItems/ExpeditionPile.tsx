import React, { useContext } from 'react';
import CardVisual from './Card';
import { Color, Card, GameStateContext, COLOR_NUMS } from '../Game';

interface ExpeditionPileProps {
    color: Color;
    player: boolean;
}

const ExpeditionPile: React.FC<ExpeditionPileProps> = ({color, player}) => {
    const gameState = useContext(GameStateContext);
    const p = player

    return (
        <div className={"pile__" + color}>
            {
                p
                ? 
                gameState?.player1Expeditions[COLOR_NUMS[color]].map((card) => (
                    <CardVisual color={card.color} value={card.value} />
                ))
                :
                gameState?.player2Expeditions[COLOR_NUMS[color]].map((card) => (
                    <CardVisual color={card.color} value={card.value} />
                ))
            }
        </div>
    );
};

export default ExpeditionPile;