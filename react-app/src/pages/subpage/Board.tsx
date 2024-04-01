import React from 'react';
import MainPanel from '../pageComponents/MainPanel';

interface BoardProps {
    // Add any props you need for the Board component
}


// ? The Gaming Page
const Board: React.FC<BoardProps> = () => {
    return (
        <div>
            <MainPanel />
        </div>
    );
};

export default Board;