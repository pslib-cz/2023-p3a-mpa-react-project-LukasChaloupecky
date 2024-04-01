import React, { useState } from 'react';
import { GameContext } from '../components/GameState';
import MainPanel from './pageComponents/MainPanel';
import { DataProvider } from '../components/DataProvider';

const TablePage: React.FC = () => {
    const Reducer = useState(GameContext);
    const Data = useState(DataProvider);


    

    // TODO: Change className to instances from imported css
    // TODO: Add grid as table
    return (
        <div className='mainPage'>
            <MainPanel />
        </div>

        
    );
};

export default TablePage;