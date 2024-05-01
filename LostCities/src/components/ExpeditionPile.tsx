import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import CardVisual from "./Card";
import { GameStateContext } from '../GameStateContext';
import { Color } from '../ItemTypes';
import { COLOR_NUMS, CardDnDFromHand } from '../Consts';

export interface ExpeditionPileProps {
    color: Color;
}


const ExpeditionPile: React.FC<ExpeditionPileProps> = ({color}) => {
    const gameState = useContext(GameStateContext);

    const GetTopCard = () => {
        return gameState?.player1Expeditions[COLOR_NUMS[color]].slice(-1)[0]
    }

    const [, drop] = useDrop(() => ({
        accept: CardDnDFromHand + color,
        
    }))




    return (
        <div ref={drop} className={"pile__" + color}>
            {
                GetTopCard() === undefined ? null : <CardVisual color={color} value={GetTopCard()!.value} />
            }
        </div>
    );
};

export default ExpeditionPile;