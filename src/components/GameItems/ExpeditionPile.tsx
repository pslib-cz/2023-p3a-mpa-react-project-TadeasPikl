import React, { useState } from 'react';
import Card from './Card';
import { Color } from '../Game';

interface ExpeditionPileProps {
    color: Color;
    player: boolean;
}

const ExpeditionPile: React.FC<ExpeditionPileProps> = ({color, player}) => {
    const [cards, setCards] = useState([]);
    const p = player

    return (
        <div>
            {
                
            }
        </div>
    );
};

export default ExpeditionPile;