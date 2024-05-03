import { FormEvent, useContext } from 'react';
import { DispatchContext } from '../GameStateContext';

const DrawPile = () => {
    const dispatch = useContext(DispatchContext);


    const drawCard = (e: FormEvent) => {
        e.preventDefault();
        dispatch!({ type: "BASIC_DRAW", player: 0});
    }

    
    return (
        <form className="draw-pile" onSubmit={drawCard}>
            <button type="submit">Draw a card</button>
        </form>
    );
};

export default DrawPile;