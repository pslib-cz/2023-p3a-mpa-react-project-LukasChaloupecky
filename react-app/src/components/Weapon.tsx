export type Weapon = {
    id: WeaponEnum;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    attack: number;
};



export enum WeaponEnum {
    Hand,
    WoodenSword,
    IronSword,
    SteelSword,
    DiamondSword,
    WoodenBow,
    IronBow,
    SteelBow,
    DiamondBow,
}