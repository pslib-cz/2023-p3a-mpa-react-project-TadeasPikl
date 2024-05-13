import ReactDOM from 'react-dom/client'
import Game from './Game.tsx';
import './index.css'
import './App.css'
import { GameStateProvider } from './GameStateContext.tsx';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GameStateProvider>
    <DndProvider backend={HTML5Backend}>
      <Game />
    </DndProvider>
  </GameStateProvider>
)
