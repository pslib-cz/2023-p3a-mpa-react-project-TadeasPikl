import DiscardPile from "./DiscardPile";
import { ALL_COLORS } from '../Game';

const DiscardPiles = () => {
    return (
        <div className='card-piles card-piles--discards'>

            {ALL_COLORS.map((color) => (
                <DiscardPile color={color} />
            ))}
        </div>
    );
};

export default DiscardPiles;