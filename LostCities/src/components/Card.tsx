import React from 'react';
import { Fish, Handshake, Pyramids, Snow, Tree, Volcano } from '../assets/Icons';

export enum Color {
    Yellow = "yellow",
    Blue = "blue",
    Green = "green",
    White = "white",
    Red = "red"
};

export interface Card {
    color: Color;
    value: number; // 0 = wager cards, 2-10 = number cards
};

const ICON_SIZE = "1.5em";

const ICON_DICT = {
    "yellow": <Pyramids height={ICON_SIZE} width={ICON_SIZE}/>,
    "blue": <Fish       height={ICON_SIZE} width={ICON_SIZE}/>,
    "green": <Tree      height={ICON_SIZE} width={ICON_SIZE}/>,
    "white": <Snow      height={ICON_SIZE} width={ICON_SIZE}/>,
    "red": <Volcano     height={ICON_SIZE} width={ICON_SIZE}/>
}

const CardVisual: React.FC<Card> = ({ color, value }) => {

    
    return (
        <div className={"card card__" + color}>
            <div className="card--values">
                {value === 0 ? <Handshake className="card--value" height={ICON_SIZE} width={ICON_SIZE}/> : <span className="card-value">{value}</span>}

                {value === 0 ? null : ICON_DICT[color]}

                {value === 0 ? <Handshake className="card--value" height={ICON_SIZE} width={ICON_SIZE}/> : <span className="card-value">{value}</span>}
            </div>

            <div className="card--image" />
        </div>
    );
};

export default CardVisual;