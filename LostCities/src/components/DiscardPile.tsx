import React, { useContext } from 'react';
import CardVisual from "./Card";
import { GameStateContext } from '../GameStateContext';
import { Color } from '../ItemTypes';
import { COLOR_NUMS } from '../Consts';

interface DiscardPileProps {
    color: Color;
}

const DiscardPile: React.FC<DiscardPileProps> = ({color}) => {
    const gameState = useContext(GameStateContext);

    const GetTopCard = () => {
        return gameState?.discardPiles[COLOR_NUMS[color]][gameState?.discardPiles[COLOR_NUMS[color]].length - 1]
    }

    return (
        <div className={"pile__" + color}>
            {
                GetTopCard() != undefined
                ?
                <CardVisual color={color} value={GetTopCard()!.value} canBeDrawn={true} />
                :
                null
            }
        </div>
    );
};

export default DiscardPile;