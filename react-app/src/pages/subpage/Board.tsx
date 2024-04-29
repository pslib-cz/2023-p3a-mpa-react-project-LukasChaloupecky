import React from 'react';
import MainPanel from '../pageComponents/MainPanel';
import { GetEnemyCollection } from '../../components/methods/EnemyFunctions';
import '../../styles/board.css'; 
import { BoardSlot } from '../../components/BoardObjectTypes';
import Table from '../pageComponents/Table';


// ? The Gaming Page
const Board = ({Board} : {Board : { state : BoardSlot[] | undefined, setState: React.Dispatch<React.SetStateAction<BoardSlot[] | undefined>>}}) => {
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
            <Table Board={Board.state} setBoard={Board.setState} />
        </div>
    );
};

export default Board;