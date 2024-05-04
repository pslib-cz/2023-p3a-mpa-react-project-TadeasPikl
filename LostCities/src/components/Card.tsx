import React, { useContext } from 'react';
import { Fish, Handshake, Pyramids, Snow, Tree, Volcano } from '../assets/Icons';
import { Card, TurnStage } from '../ItemTypes';
import { useDrag } from 'react-dnd'
import { CardDnDFromHand } from '../Consts';
import { GameStateContext } from '../GameStateContext';


const ICON_SIZE = "1.5em";

const ICON_DICT = {
    "yellow": <Pyramids height={ICON_SIZE} width={ICON_SIZE}/>,
    "blue": <Fish       height={ICON_SIZE} width={ICON_SIZE}/>,
    "green": <Tree      height={ICON_SIZE} width={ICON_SIZE}/>,
    "white": <Snow      height={ICON_SIZE} width={ICON_SIZE}/>,
    "red": <Volcano     height={ICON_SIZE} width={ICON_SIZE}/>
}

const CardVisual: React.FC<Card> = ({ color, value, handIndex }) => {
    const gameState = useContext(GameStateContext);

    const [{ isDragging }, dragRef] = useDrag(
        () => ({
            type: CardDnDFromHand + 0,
            item: { color, value, handIndex },
            canDrag: handIndex != null && gameState?.turnStage == TurnStage.PLAY,
            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        }),
        [gameState?.turnStage]
    )
      
    return (
        <div ref={dragRef} className={"card card__" + color + (isDragging ? " card__dragging" : "") + (handIndex != null && gameState?.turnStage == TurnStage.PLAY ? " card__draggable" : "")}>
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