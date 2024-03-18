import React, {useState} from 'react';

type MainMenuProps = {
  setGameStarted: (gameStarted: boolean) => void;
};

const MainMenu: React.FC<MainMenuProps> = ({setGameStarted}) => {
    const startGame = () => {
        setGameStarted(true);
    };
    
    return (
        <div>
            <h1>Lost Cities</h1>
            <button onClick={startGame}>Start Game</button>
        </div>
    );
};

export default MainMenu;