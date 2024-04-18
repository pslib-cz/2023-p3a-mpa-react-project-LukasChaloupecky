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
    HP: number;
    person : Person;
    score: number;
    money: number;
    charm: number; // ? Determines the prices in the shop
    Armors: ArmorInventory;
    Weapon : Weapon;
    Cards: Card[];
    currentSpot : number; // ? Place on the board
};
export const initialGameState : GameState = {
    isRegistered : false,
    HP: 100,
    person : { firstName: '', lastName: ''},
    score: 0,
    money: 0,
    charm: 0,
    Armors : InitialArmor,
    Weapon : InitialWeaponCards[0],
    Cards : [ ],
    currentSpot : 0
};




// Define the action types
type Action =
    | { type: 'INCREMENT_HP', payload: number }
    | { type: 'DECREASE_HP', payload: number}
    | { type: 'CHANGE_ARMOR', Armor: Armor }
    | { type: 'CHANGE_WEAPON', weapon: Weapon }
    | { type: 'MOVE_PLAYER', steps: number}
    | { type: 'UPDATE_PERSON', payload: Person}
    | { type: 'REMOVE_CARD', cardIndex:number}
    | { type: 'ADD_CARD', Card: Card}
    | { type: 'GAME_OVER' }
    | { type: "IS_REGISTERED", payload: boolean};

// Define the reducer function
const GameState = (state = initialGameState, action: Action) => {
    switch (action.type) {
        case 'INCREMENT_HP':
            return { ...state, lives: state.HP + action.payload };
        case 'DECREASE_HP':
            return { ...state, lives: state.HP - action.payload};
        case 'CHANGE_ARMOR':
            const armor = action.Armor;

            /*
            if (armor.type & ArmorTypeEnum.Helmet) {
                return { ...state, Armors: { ...state.Armors, Helmet: armor } };
            } 
            else if (armor.type & ArmorTypeEnum.Chestplate) {
                return { ...state, Armors: { ...state.Armors, Chestplate: armor } };
            } 
            else if (armor.type & ArmorTypeEnum.Leggings) {
                return { ...state, Armors: { ...state.Armors, Leggings: armor } };
            } 
            else if (armor.type & ArmorTypeEnum.Boots) {
                return { ...state, Armors: { ...state.Armors, Boots: armor } };
            } else {
                throw new Error("The Armor Selected did not contain valid ArmorType - which is enum - in reducer");
            }
            */
            switch (armor.type) {
                case ArmorTypeEnum.Helmet:
                    return { ...state, Armors: { ...state.Armors, Helmet: armor } };
                case ArmorTypeEnum.Chestplate:
                    return { ...state, Armors: { ...state.Armors, Chestplate: armor } };
                case ArmorTypeEnum.Leggings:
                    return { ...state, Armors: { ...state.Armors, Leggings: armor } };
                case ArmorTypeEnum.Boots:
                    return { ...state, Armors: { ...state.Armors, Boots: armor } };
            }
            throw new Error("The Armor Selected did not contain valid ArmorType - which is enum - in reducer");
        case 'CHANGE_WEAPON':
            return { ...state, Weapon: action.weapon };
        case 'MOVE_PLAYER':
            return { ...state, CurrentSpot: state.currentSpot + action.steps};
        case 'REMOVE_CARD':
            return { ...state, Cards: state.Cards.filter((card, index) => index !== action.cardIndex) };
        case 'ADD_CARD':
            return { ...state, Cards: [ ...state.Cards, action.Card ] };
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
