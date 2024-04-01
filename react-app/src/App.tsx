import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './pages/Registration'
import GameState, { GameContext, initialGameState } from './components/GameState'

function App() {
  const [state, dispatch] = useReducer(GameState, initialGameState)

  return (
    <>
      {state.isRegistered ? (
        <>
          {state.person.firstName}
        </>
      ) : (
        <GameContext.Provider value={{ state: state, dispatch: dispatch }}>
          <Registration></Registration>
        </GameContext.Provider>
      )}
    </>
  )
}

export default App
