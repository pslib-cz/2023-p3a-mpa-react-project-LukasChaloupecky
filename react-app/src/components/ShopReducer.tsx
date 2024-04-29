// Import necessary dependencies
import { Reducer } from 'react';
import { Armor } from './Armor';
import { Weapon } from './Weapon';
import { DataProvider } from './DataProvider';

// Define the initial state
interface ShopState {
    // Define your initial state properties here
    CollectionSize : number; // ? defines how many object (armors and weapons) combined have
    Armors : Armor[];
    Weapons : Weapon[];
}

enum ActionEnum {
    SELL_ARMOR = 'SELL_ARMOR',
    SELL_WEAPON = 'SELL_WEAPON',
    RENEW_CONTENT = 'RENEW_CONTENT'
} 
// Define the action types
type Action =
    // Define your action types here
    | { type: ActionEnum.RENEW_CONTENT; userLevel: number; }; // ! This action cost mmoney of  the user

// Define the reducer function

// ? Based of level from user reducer, the con;tent will be gotten
// ? 
const shopReducer: Reducer<ShopState, Action> = (state, action) => {
    switch (action.type) {
        // Handle different action types here
        case ActionEnum.RENEW_CONTENT:
            let armors = DataProvider.Armors.filter(armor => armor.level <= action.userLevel);
            let weapons = DataProvider.Weapons.filter(weapon => weapon.level <= action.userLevel);
            let random = Math.floor(Math.random());
            for (let i = 0; i < state.CollectionSize; i++) 
            { 
               random = Math.floor(Math.random()); 
               if (random === 0) 
               { 
                   state.Armors.push(armors[Math.floor(Math.random() * armors.length)]); 
               }
               else {
                    state.Weapons.push(weapons[Math.floor(Math.random() * weapons.length)]);
               }
            }
            return {
                ...state,
                Weapons : state.Weapons,
                Armors : state.Armors
            }

            return {
                ...state,
                // Update state based on the action
            };
        default:
            return state;
    }
};

export default shopReducer;