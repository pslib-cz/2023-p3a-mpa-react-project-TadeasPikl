import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Game from './components/Game.tsx';
import MainMenu from './components/MainMenu.tsx';
import './index.css'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu/>,
  },
  {
    path: "/Game",
    element: <Game/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
