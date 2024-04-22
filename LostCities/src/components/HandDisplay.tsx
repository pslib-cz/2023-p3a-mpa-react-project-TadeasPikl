import React, { useContext } from 'react';
import CardVisual from './Card';
import { GameStateContext } from '../Game';

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