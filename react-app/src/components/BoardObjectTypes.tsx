import { Armor } from "./Armor";
import { Weapon } from "./Weapon";

export type EnemyBoard = {
    Enemy : Enemy;
    Position : number;
}
export type ArmorBoard = {
    Armor : Armor;
    Position : number;
}
export type WeaponBoard = {
    Weapon : Weapon;
    Position : number;
}

export type BoardSlot = {
    Enemy : EnemyBoard;
    Armor : ArmorBoard;
    Weapon : WeaponBoard;
}