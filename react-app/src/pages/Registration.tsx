import React, { useContext, useState } from 'react';
import { GameContext } from '../components/GameState';


const Registration = () => {
    const GameState = useContext(GameContext);
    if (!GameState) {
        throw new Error("GameState in Registration.tsx is of type Undefined");
    }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstName = (firstname : string) => {
        setFirstName(firstname);
    };

    const handleLastName = (lastname : string) =>  {
        setLastName(lastname);
    };

    const handleSubmit = () => {
        GameState.dispatch({ type: 'UPDATE_PERSON', payload: { firstName, lastName } });

        GameState.dispatch({ type: 'IS_REGISTERED', payload: true });

        
        console.log("🚀 ~ handleSubmit ~ firstName:", firstName)
        console.log("🚀 ~ handleSubmit ~ lastName:", lastName)
        console.log("🚀 ~ handleSubmit ~ GameState:", GameState)
        
    }

    return (
        <div>
            <form>
                <label>
                    First Name:
                </label>
                <input type="text" value={firstName} onChange={(e) => handleFirstName(e.target.value)} />
                
                <label>
                    Last Name: 
                </label>
                <input type="text" value={lastName} onChange={(e) => handleLastName(e.target.value)} />
            </form>
            <button type="submit" onClick={() => handleSubmit()}>Submit</button>
        </div>
    );
};

export default Registration;