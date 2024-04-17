import React, { useState, useContext } from 'react';
import CardVisual from './Card';
import { Color, Card, GameStateContext } from '../Game';

const HandDisplay: React.FC = () => {
    const gameState = useContext(GameStateContext);
    
    return (
        <div className='hand'>
            {
                gameState?.player1Hand.map((card) => (
                    <CardVisual color={card.color} value={card.value} />
                ))
            }
        </div>
    );
};

export default HandDisplay;