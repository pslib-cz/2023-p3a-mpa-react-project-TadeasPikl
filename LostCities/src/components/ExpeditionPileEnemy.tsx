import React, { useContext } from 'react';
import CardVisual from "./Card";
import { GameStateContext } from '../GameStateContext';
import { COLOR_NUMS } from '../Consts';
import { ExpeditionPileProps } from './ExpeditionPile';


const ExpeditionPileEnemy: React.FC<ExpeditionPileProps> = ({color}) => {
    const gameState = useContext(GameStateContext);

    const GetTopCard = () => {
        return gameState?.player2Expeditions[COLOR_NUMS[color]].slice(-1)[0]
    }

    return (
        <div className={"pile__" + color}>
            {
                GetTopCard() === undefined ? null : <CardVisual color={color} value={GetTopCard()!.value} />
            }
        </div>
    );
};

export default ExpeditionPileEnemy;