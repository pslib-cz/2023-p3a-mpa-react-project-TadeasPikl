import { useState } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import Game from './components/Game'

function App() {
  const [gameStarted, setGameStarted] = useState(false)


  return (
    <>
    {gameStarted ? <Game /> : <MainMenu setGameStarted={setGameStarted} />}
    </>
  )
}

export default App
