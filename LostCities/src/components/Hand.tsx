import React, { useContext, useEffect } from 'react';
import CardVisual from './Card';
import { GameStateContext } from '../GameStateContext';

const HandDisplay: React.FC = () => {
    const gameState = useContext(GameStateContext);
    
    return (
        <div className='hand'>
            {
                gameState?.players[0].hand.map((card) => (
                    <CardVisual key={gameState.players[0].hand.indexOf(card)} color={card.color} value={card.value} handIndex={gameState.players[0].hand.indexOf(card)}/>
                ))
            }
        </div>
    );
};

export default HandDisplay;