import React, { useContext } from 'react';
import { GameContext } from '../../components/GameState';

const MainPanel: React.FC = () => {
    const Reducer = useContext(GameContext);

    
    // TODO: Change className to instances from imported css
    return (
        <div className='panel'>
            <div className='panel__mainInfo'>
                <p>Name: {Reducer?.state.person.firstName} {Reducer?.state.person.lastName}</p>
                <p>Lives: {Reducer?.state.lives}</p>
                <p>Score: {Reducer?.state.score}</p>
                <p>Money: {Reducer?.state.money}</p>
            </div>
            <div className='panel__armor'>
                
            </div>
        </div>
    );
};

export default MainPanel;