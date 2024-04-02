export type Armor = {
    id: ArmorEnum;
    type: ArmorTypeEnum;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    defense: number;
};

export enum ArmorTypeEnum {
    Helmet = 0,
    Chestplate = 1,
    Leggings = 2,
    Boots = 3,
 }

export enum ArmorEnum {
    None = 0,
    LeaherHeat = 1,
    LeatherChestplate = 2,
    LeatherLeggings = 3,
    LeatherBoots = 4,
    IronHelmet = 5,
    IronChestplate = 6,
    IronLeggings = 7,
    IronBoots = 8,
}


