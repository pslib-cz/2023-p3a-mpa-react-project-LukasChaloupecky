export type Armor = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    defense: number;
};


export enum ArmorEnum {
    LeaherHeat,
    LeatherChest,
    LeatherLegs,
    LeatherBoots,
    IronHelmet,
    IronChest,
    IronLegs,
    IronBoots,
}