import { createContext } from "react";
import { ArmorEnum, Armor } from "./Armor";
import { Weapon } from "./Weapon";

// ? Works like service for providing data - about cards, etc.

export interface IDataProvider {
    Armors : Armor[];
    Weapons : Weapon[];
    Cards : Card[];
}


export const DataProvider = createContext<IDataProvider | undefined>(undefined);