import React, { useContext } from 'react';
import { GameContext } from '../../components/GameState';



const Table = ({Enemies, setEnemies} : {Enemies : EnemyBoard[] | undefined, setEnemies : React.Dispatch<React.SetStateAction<EnemyBoard[] | undefined>>}) => {
    const Reducer = useContext(GameContext);
    

    return (
        <div>
            {/* Add your table content here */}
        </div>
    );
};

export default Table;