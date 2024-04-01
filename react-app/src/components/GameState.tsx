import { createContext } from "react";
import { Armor, ArmorEnum, ArmorTypeEnum } from "./Armor";
import { Weapon, WeaponEnum } from "./Weapon";
import { Person } from "./Person";
import { InitialArmorCards } from "../data/temporaryArmorCards";
import InitialWeaponCards from "../data/temporaryWeaponCards";

// GameState.tsx
//export const GameContext = createContext<GameState | undefined>(undefined);
export const GameContext = createContext<{ state: GameState; dispatch: React.Dispatch<Action> } | undefined>(undefined);

/*
type ArmorSlot = {
    ArmorType : ArmorTypeEnum;
    ArmorEnum : ArmorEnum;
}
*/

type ArmorInventory = { 
    Helmet : Armor,
    Chestplate : Armor,
    Leggings : Armor,
    Boots : Armor
};


const InitialArmor : ArmorInventory = {
    Helmet : InitialArmorCards[0],
    Chestplate : InitialArmorCards[0],
    Leggings : InitialArmorCards[0],
    Boots : InitialArmorCards[0]
};

// Define the initial state of the game
type GameState = { 
    isRegistered : boolean;
    lives: number;
    person : Person;
    score: number;
    money: number;
    Armors: ArmorInventory;
    Weapon : Weapon;
    Cards: Card[];
    currentSpot : number; // ? Place on the board
};
export const initialGameState : GameState = {
    isRegistered : false,
    lives: 3,
    person : { firstName: '', lastName: ''},
    score: 0,
    money: 0,
    Armors : InitialArmor,
    Weapon : InitialWeaponCards[0],
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