import React, { useContext } from 'react';
import { GameContext } from '../../components/GameState';

interface TableProps {
    // Define the props for the Table component here
}

const Table: React.FC<TableProps> = () => {
    const Reducer = useContext(GameContext);


    return (
        <div>
            {/* Add your table content here */}
        </div>
    );
};

export default Table;