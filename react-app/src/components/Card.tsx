type Card = {
    id: CardEnum;
    name: string;
    description: string;
    imageUrl: string;
    price: number; // ? For how much can the card be sold and bought (regarding the increase in price in shop)
    attack: number; // ! Use decrase of HP points, with regard to weapon
    health: number; // ! Use HP points
    protection: number; // ! Use percentage
    type?: CardType; // ? What type of card is it
    // TODO_1 : What properies to have so it works well with the enemy based on type etc.
};


enum CardType { 
    Magic,
    Physical,
    LongDistance
}

// TODO: Make card enums
enum CardEnum {
    SmallHeal,
    BigHeal,
    SmallAttackPhysical,
    BigAttackPhysical,
    SmallAttackMagic,
    BigAttackMagic,
    SmallAttackLongDistance,
    BigAttackLongDistance,
    SmallProtection,
    BigProtection
};