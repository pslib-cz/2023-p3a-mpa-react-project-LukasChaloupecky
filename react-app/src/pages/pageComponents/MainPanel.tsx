import React, { useContext } from 'react';
import { GameContext } from '../../components/GameState';
import { DataProvider } from '../../components/DataProvider';

const MainPanel: React.FC = () => {
    const Reducer = useContext(GameContext);
    const Data = useContext(DataProvider);
    
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

                <div key={0} className='armorCard'>
                    {Data?.Armors.find((a) => a.id === Reducer?.state.Armors.Helmet)?.name}
                </div>
                <div key={1} className='armorCard'>
                    {Data?.Armors.find((a) => a.id === Reducer?.state.Armors.Chestplate)?.name}
                </div>
                <div key={2} className='armorCard'>
                    {Data?.Armors.find((a) => a.id === Reducer?.state.Armors.Leggings)?.name}
                </div>
                <div key={3} className='armorCard'>
                    {Data?.Armors.find((a) => a.id === Reducer?.state.Armors.Boots)?.name}
                </div>

            </div>
        </div>
    );
};

export default MainPanel;