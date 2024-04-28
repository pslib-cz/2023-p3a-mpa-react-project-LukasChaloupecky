import { createContext } from "react";
import { ArmorEnum, Armor } from "./Armor";
import { Weapon } from "./Weapon";
import { InitialArmorCards } from "../data/temporaryArmorCards";
import InitialWeaponCards from "../data/temporaryWeaponCards";

// ? Works like service for providing data - about cards, etc.

export interface IDataProvider {
    Armors : Armor[];
    Weapons : Weapon[];
    Cards : Card[];
    Enemies: Enemy[];
}

export const DataProvider : IDataProvider = {
    Armors : InitialArmorCards,
    Weapons : InitialWeaponCards,
    Cards : [],
    Enemies: []
}

//export const DataProvider = createContext<IDataProvider | undefined>(undefined);