import React, { useState } from 'react';
import { GameContext } from '../components/GameState';
import MainPanel from './pageComponents/MainPanel';

const TablePage: React.FC = () => {
    const Reducer = useState(GameContext);
    

    // TODO: Change className to instances from imported css
    return (
        <div className='mainPage'>
            <MainPanel />
        </div>
    );
};

export default TablePage;