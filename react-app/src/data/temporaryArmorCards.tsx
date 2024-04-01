import { Armor, ArmorEnum, ArmorTypeEnum } from "../components/Armor";


// TODO: Later change to json file 

export const InitialArmorCards: Armor[] = [
    {
        id: ArmorEnum.LeaherHeat,
        type: ArmorTypeEnum.Helmet,
        name: "Leather Helmet",
        description: "Basic leather helmet",
        imageUrl: "https://example.com/leather-helmet.png",
        price: 10,
        defense: 5,
    },
    {
        id: ArmorEnum.IronBoots,
        type: ArmorTypeEnum.Chestplate,
        name: "Leather Chestplate",
        description: "Basic leather chestplate",
        imageUrl: "https://example.com/leather-chestplate.png",
        price: 20,
        defense: 10,
    },
    {
        id: ArmorEnum.LeatherLeggings,
        type: ArmorTypeEnum.Leggings,
        name: "Leather Leggings",
        description: "Basic leather leggings",
        imageUrl: "https://example.com/leather-leggings.png",
        price: 15,
        defense: 8,
    },
    {
        id: ArmorEnum.LeatherBoots,
        type: ArmorTypeEnum.Boots,
        name: "Leather Boots",
        description: "Basic leather boots",
        imageUrl: "https://example.com/leather-boots.png",
        price: 12,
        defense: 6,
    },
    {
        id: ArmorEnum.IronHelmet,
        type: ArmorTypeEnum.Helmet,
        name: "Iron Helmet",
        description: "Basic iron helmet",
        imageUrl: "https://example.com/iron-helmet.png",
        price: 15,
        defense: 7,
    },
    {
        id: ArmorEnum.IronChestplate,
        type: ArmorTypeEnum.Chestplate,
        name: "Iron Chestplate",
        description: "Basic iron chestplate",
        imageUrl: "https://example.com/iron-chestplate.png",
        price: 25,
        defense: 12,
    },
    {
        id: ArmorEnum.IronLeggings,
        type: ArmorTypeEnum.Leggings,
        name: "Iron Leggings",
        description: "Basic iron leggings",
        imageUrl: "https://example.com/iron-leggings.png",
        price: 20,
        defense: 10,
    },
    {
        id: ArmorEnum.IronBoots,
        type: ArmorTypeEnum.Boots,
        name: "Iron Boots",
        description: "Basic iron boots",
        imageUrl: "https://example.com/iron-boots.png",
        price: 18,
        defense: 9,
    },
];