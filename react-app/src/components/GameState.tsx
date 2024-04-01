// GameState.tsx


type Armor = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    defense: number;
};


// Define the initial state of the game
type GameState = { 
    lives: number;
    score: number;
    money: number;
    Armors: Armor[];
    Cards: Card[];
    CurrentSpot : number; // ? Place on the board
};


const initialGameState : GameState = {
    lives: 3,
    score: 0,
    money: 0,
    Armors : [ ],
    Cards : [ ],
    CurrentSpot : 0
};

// Define the action types
type Action =
    | { type: 'INCREMENT_LIVES'; payload: number }
    | { type: 'DECREASE_LIVES'; payload: number}
    | { type: 'GAME_OVER' };

// Define the reducer function
const GameState = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'INCREMENT_LIVES':
            return { ...state, lives: state.lives + action.payload };
        case 'DECREASE_LIVES':
            return { ...state, lives: state.lives - action.payload};
        case 'GAME_OVER':
            return { ...state, lives: 0 };
        default:
            return state;
    }
};

export default GameState;