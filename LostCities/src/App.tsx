import React, { useState } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'

function App() {
  const [gameStarted, setGameStarted] = useState(false)


  return (
    <>
    {gameStarted ? null : <MainMenu setGameStarted={setGameStarted} />}
    </>
  )
}

export default App
