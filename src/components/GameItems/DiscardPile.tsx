import React, { useState } from 'react';
import Card from './Card';
import { Color } from '../Game';

interface DiscardPileProps {
    color: Color;
}

const DiscardPile: React.FC<DiscardPileProps> = ({color}) => {
    const [cards, setCards] = useState([]);
    
    return (
        <div>
            {
                
            }
        </div>
    );
};

export default DiscardPile;