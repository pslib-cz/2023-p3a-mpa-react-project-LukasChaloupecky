import React, { useState } from 'react';
import { GameContext } from '../components/GameState';

const TablePage: React.FC = () => {
    const Reducer = useState(GameContext);
    

    
    return (
        <div>
            <h1>Table Page</h1>
            {/* Your table component goes here */}
        </div>
    );
};

export default TablePage;