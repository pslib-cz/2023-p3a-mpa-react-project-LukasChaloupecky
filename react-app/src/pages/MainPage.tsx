import React, { useState } from 'react';
import { GameContext } from '../components/GameState';
import MainPanel from './pageComponents/MainPanel';
//import { DataProvider } from '../components/DataProvider';
import Board from './subpage/Board';
import { GetEnemyCollection } from '../components/methods/EnemyFunctions';
import Shop from './subpage/Shop';

export const MainPage: React.FC = () => {
    const Reducer = useState(GameContext);
    //const Data = useState(DataProvider);

    // TODO: Figure out a valid approach (= playable) as parameters for GetEnemyCollection
    const [Enemies, setEnemies] = useState<undefined | EnemyBoard[]>(); // ? these params are temporary here


    const createBoard = () => {
        setEnemies(GetEnemyCollection({boardSize: 10, boardDifficulty: 50, minEnemyDifficulty: 1, maxEnemyDifficulty: 10}));
    };

    // TODO_0: Create a valid collection of enemies on the board
    // TODO_0: Create a valid collection of benefits on the board
    

    // TODO_1: Change className to instances from imported css
    // TODO_1: Add grid as table
    return (
        <div className='mainPage'>
            <Board />
            <Shop />
        </div>

        
    );
};

export default MainPage;