import { createContext } from "react";
import { ArmorEnum } from "./Armor";

// GameState.tsx
//export const GameContext = createContext<GameState | undefined>(undefined);
export const GameContext = createContext<{ state: GameState; dispatch: React.Dispatch<Action> } | undefined>(undefined);



type Person = { 
    firstName: string;
    lastName: string;
}

// Define the initial state of the game
type GameState = { 
    isRegistered : boolean;
    lives: number;
    person : Person;
    score: number;
    money: number;
    Armors: ArmorEnum[];
    Weapon : WeaponEnum;
    Cards: Card[];
    currentSpot : number; // ? Place on the board
};


export const initialGameState : GameState = {
    isRegistered : false,
    lives: 3,
    person : { firstName: '', lastName: ''},
    score: 0,
    money: 0,
    Armors : [ ],
    Weapon : WeaponEnum.Hand,
    Cards : [ ],
    currentSpot : 0
};

// Define the action types
type Action =
    | { type: 'INCREMENT_LIVES', payload: number }
    | { type: 'DECREASE_LIVES', payload: number}
    | { type: 'MOVE_PLAYER', payload: number}
    | {type : 'UPDATE_PERSON', payload : Person}
    | { type: 'GAME_OVER' }
    | {type : "IS_REGISTERED", payload : boolean};

// Define the reducer function
const GameState = (state = initialGameState, action: Action) => {
    switch (action.type) {
        case 'INCREMENT_LIVES':
            return { ...state, lives: state.lives + action.payload };
        case 'DECREASE_LIVES':
            return { ...state, lives: state.lives - action.payload};
        case 'MOVE_PLAYER':
            return { ...state, CurrentSpot: state.currentSpot + action.payload};
        case 'GAME_OVER':
            return { ...state, lives: 0 };
        case 'UPDATE_PERSON':
            return { ...state, person : action.payload};
        case 'IS_REGISTERED':
            return { ...state, isRegistered : action.payload};
        default:
            return state;
    }
};

export default GameState;