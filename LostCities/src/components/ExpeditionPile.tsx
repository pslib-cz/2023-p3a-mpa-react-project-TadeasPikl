import React, { useContext } from 'react';
import CardVisual, {Color} from "./Card";
import { GameStateContext } from '../GameStateContext';
import { COLOR_NUMS } from '../Consts';

interface ExpeditionPileProps {
    color: Color;
    player: boolean;
}


const ExpeditionPile: React.FC<ExpeditionPileProps> = ({color, player}) => {
    const gameState = useContext(GameStateContext);
    const p = player


    const GetTopCard = () => {
        if (p) {
            return gameState?.player1Expeditions[COLOR_NUMS[color]].slice(-1)[0]
        }
        else {
            return gameState?.player1Expeditions[COLOR_NUMS[color]].slice(-1)[0]
        }
    }


    return (
        <div className={"pile__" + color}>
            {
                GetTopCard() === undefined ? null : <CardVisual color={color} value={GetTopCard()!.value} />
            }
        </div>
    );
};

export default ExpeditionPile;