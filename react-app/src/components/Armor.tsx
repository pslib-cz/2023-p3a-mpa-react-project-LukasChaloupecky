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
    Helmet,
    Chestplate,
    Leggings,
    Boots,
 }

export enum ArmorEnum {
    LeaherHeat,
    LeatherChestplate,
    LeatherLeggings,
    LeatherBoots,
    IronHelmet,
    IronChestplate,
    IronLeggings,
    IronBoots,
}