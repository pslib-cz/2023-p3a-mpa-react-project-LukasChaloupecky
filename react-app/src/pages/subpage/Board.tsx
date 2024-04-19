import React from 'react';
import MainPanel from '../pageComponents/MainPanel';
import { GetEnemyCollection } from '../../components/methods/EnemyFunctions';
import '../../styles/board.css'; 


// ? The Gaming Page
const Board = ({Enemies} : {Enemies : [EnemyBoard[] | undefined, React.Dispatch<React.SetStateAction<EnemyBoard[] | undefined>>]}) => {
    // ? BOARD IS 15x7
    return (
        <div>
            <MainPanel />
            <div className='boardTop'> 
                <div className='chest'>
                    <img alt='store icon' />
                    <p>Go to SHOP</p>
                </div>
                <div className='board'>
                    
                </div>
            </div>
        </div>
    );
};

export default Board;