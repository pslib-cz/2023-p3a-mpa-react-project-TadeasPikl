import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import CardVisual from "./Card";
import { DispatchContext, GameStateContext } from '../GameStateContext';
import { Card, Color } from '../ItemTypes';
import { COLOR_NUMS, CardDnDFromHand } from '../Consts';
import { GetExpeditionScore } from '../gameLogic/DeckManager';

export interface ExpeditionPileProps {
    color: Color;
    player: number;
}


const ExpeditionPile: React.FC<ExpeditionPileProps> = ({color, player}) => {
    const gameState = useContext(GameStateContext);
    const dispatch = useContext(DispatchContext);

    const GetTopCard = () => {
        return gameState?.players[player].expeditions[COLOR_NUMS[color]][gameState?.players[player].expeditions[COLOR_NUMS[color]].length - 1]
    }

    const [, drop] = useDrop(() => ({
        accept: CardDnDFromHand + player,
        drop: (item: Card) => dispatch!({type: "PLAY", cardIndex: item.handIndex!, player: 0, expedition: COLOR_NUMS[color]}),
    }))

    return (
        <>
            <div ref={drop} className={"card-piles--pile pile__" + color}>
                {
                    GetTopCard() != undefined ? <CardVisual color={color} value={GetTopCard()!.value} /> : null
                }
            </div>
            <div className="card-piles--score">
                {
                    GetExpeditionScore(gameState?.players[player].expeditions[COLOR_NUMS[color]]!)
                }
            </div>
        </>
    );
};

export default ExpeditionPile;