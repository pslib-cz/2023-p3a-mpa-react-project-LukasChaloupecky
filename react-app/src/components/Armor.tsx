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
    None,
    LeaherHeat,
    LeatherChestplate,
    LeatherLeggings,
    LeatherBoots,
    IronHelmet,
    IronChestplate,
    IronLeggings,
    IronBoots,
}


