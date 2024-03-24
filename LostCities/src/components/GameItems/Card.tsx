import React from 'react';
import { Color } from '../Game';

interface CardProps {
    color: Color;
    value: number; // 1 = handshake, 2-10 = number cards
}

const Card: React.FC<CardProps> = ({ color, value }) => {
    return (
        <div className={"card card__" + color}>
            <div className="card--values">
                {value === 1 ? <span className="card-value">🤝</span> : <span className="card-value">{value}</span>}



                {value === 1 ? <span className="card-value">🤝</span> : <span className="card-value">{value}</span>}
            </div>

            <div className="card--image" />
        </div>
    );
};

export default Card;