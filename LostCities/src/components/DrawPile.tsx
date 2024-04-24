import React, { useContext } from 'react';
import { DispatchContext } from '../GameStateContext';

const DrawPile = () => {
    const dispatch = useContext(DispatchContext);


    function drawCard() {
        dispatch!({ type: "BASIC_DRAW"});
    }

    
    return (
        <div className="draw-pile">
            <button onClick={drawCard}>Draw a card</button>
        </div>
    );
};

export default DrawPile;