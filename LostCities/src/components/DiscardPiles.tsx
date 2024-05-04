import DiscardPile from "./DiscardPile";
import { ALL_COLORS, CardDnDFromHand } from '../Consts';
import { useDrop } from "react-dnd";
import { Card } from "../ItemTypes";
import { useContext } from "react";
import { DispatchContext } from "../GameStateContext";

const DiscardPiles = () => {
    const dispatch = useContext(DispatchContext);

    const [, drop] = useDrop(() => ({
        accept: CardDnDFromHand + 0,
        drop: (item: Card) => dispatch!({type: "DISCARD", cardIndex: item.handIndex!, player: 0}),
    }))

    return (
        <div ref={drop} className='card-piles card-piles--discards'>
            {ALL_COLORS.map((color) => (
                <DiscardPile key={color} color={color} />
            ))}
        </div>
    );
};

export default DiscardPiles;