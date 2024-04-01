import { useReducer, useState } from 'react'
import './App.css'
import Registration from './pages/Registration'
import GameState, { GameContext, initialGameState } from './components/GameState'
import { DataProvider } from './components/DataProvider'
import { InitialArmorCards } from './data/temporaryArmorCards'
import InitialWeaponCards from './data/temporaryWeaponCards'
import TablePage, { MainPage } from './pages/MainPage'
import MainPanel from './pages/pageComponents/MainPanel'

function App() {
  const [state, dispatch] = useReducer(GameState, initialGameState)



  const [Armors, setArmors] = useState(InitialArmorCards);
  console.log("🚀 ~ App ~ InitialArmorCards:", InitialArmorCards)
  const [Weapons, setWeapons] = useState(InitialWeaponCards);
  console.log("🚀 ~ App ~ InitialWeaponCards:", InitialWeaponCards)

  return (
    <>
    {state.isRegistered ? 
      (
        <DataProvider.Provider value={{ Armors: Armors, Weapons: Weapons, Cards: [] }}>
        <GameContext.Provider value={{ state: state, dispatch: dispatch }}>
          
          <MainPage />


        </GameContext.Provider>
        </DataProvider.Provider>
      ) 
      : 
      (
        <DataProvider.Provider value={{ Armors: Armors, Weapons: Weapons, Cards: [] }}>
        <GameContext.Provider value={{ state: state, dispatch: dispatch }}>


          <Registration />


        </GameContext.Provider>
        </DataProvider.Provider>
      )
    }
    </>
  )
}

export default App
