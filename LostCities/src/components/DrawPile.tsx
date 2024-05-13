import { useContext } from 'react';
import { DispatchContext } from '../GameStateContext';

const DrawPile = () => {
    const dispatch = useContext(DispatchContext);


    const drawCard = () => {
        // debugger;
        dispatch!({ type: "BASIC_DRAW", player: 0});
    }

    
    return (
        <div className="draw-pile" onClick={drawCard} />
    );
};

export default DrawPile;