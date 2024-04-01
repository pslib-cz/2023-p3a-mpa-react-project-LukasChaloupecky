import { useReducer, useState } from 'react'
// import './App.css'
import Registration from './pages/Registration'
import GameState, { GameContext, initialGameState } from './components/GameState'
import { DataProvider } from './components/DataProvider'
import { InitialArmorCards } from './data/temporaryArmorCards'
import InitialWeaponCards from './data/temporaryWeaponCards'

function App() {
  const [state, dispatch] = useReducer(GameState, initialGameState)
  const [Armors, setArmors] = useState(InitialArmorCards);
  const [Weapons, setWeapons] = useState(InitialWeaponCards);

  return (
    <>
      {state.isRegistered ? (
        <>
          {state.person.firstName}
        </>
      ) : (
        <DataProvider.Provider value={{ Armors: Armors, Weapons: Weapons, Cards: [] }}>
        <GameContext.Provider value={{ state: state, dispatch: dispatch }}>
          <Registration />
        </GameContext.Provider>
      </DataProvider.Provider>
      )}
    </>
  )
}

export default App
