import React, { useContext } from 'react';
import { GameContext } from '../../components/GameState';
import { BoardSlot } from '../../components/BoardObjectTypes';



const Table = ({Board, setBoard} : {Board : BoardSlot[] | undefined, setBoard : React.Dispatch<React.SetStateAction<BoardSlot[] | undefined>>}) => {
    const Reducer = useContext(GameContext);
    

    return (
        <div>
            {/* Add your table content here */}
            // TODO : add table content
            <div className='table'>
               {
                   Board?.map((slot, index) => {
                       return (
                           <div key={index} className='tableSlot'>
                               {slot.Enemy.Enemy.name}
                           </div>
                       )
                   })
               } 
            </div>

        </div>
    );
};

export default Table;