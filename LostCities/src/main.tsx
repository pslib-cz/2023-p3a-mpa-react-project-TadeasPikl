import React from 'react'
import ReactDOM from 'react-dom/client'
import Game from './Game.tsx';
import './index.css'
import './App.css'
import { GameStateContext, GameStateProvider } from './GameStateContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <GameStateProvider>
    <Game />
  </GameStateProvider>
)
