type Enemy = {
    id: EnemyEnum;
    name: string;
    description: string;
    cardImageUrl: string; // ? BIG IMAGE ON THE CARD
    smallImageUrl: string; // ? SMALL IMAGE SHOWING THAT THE ENEMY IS ON THE BOARD AT CERTAIN LOCATION
    reward: number; // ? How much gold the player gets for defeating the enemy
    attack: number; // ? How much damage the enemy does
    defense: number;
    health: number;
    type: EnemyTypeEnum; // ? Defines what cards are the most effective
}

enum EnemyEnum { 
    Minotaur,
    Goblin,
    Orc,
    Troll,
    Vampire
}


// ? Defines what cards are the most effective
enum EnemyTypeEnum { 
    Melee,
    Ranged,
    Magic
}