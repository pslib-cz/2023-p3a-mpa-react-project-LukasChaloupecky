import Board from "../../pages/subpage/Board";
import { DataProvider } from "../DataProvider";



// ? boardDifficulty - the chance of enemy on the board
// ? maxEnemyDifficulty with minEnemyDifficulty - what enemies will be avalible on the board
export const GetEnemyCollection = ({boardSize, boardDifficulty, minEnemyDifficulty, maxEnemyDifficulty} : {boardSize:number, boardDifficulty: number, minEnemyDifficulty: number, maxEnemyDifficulty: number}) => {
    let randomNumber = 0;
    let randomEnemy: Enemy|undefined = undefined;
    let boardEnemies : Enemy[] = [];
    // ? Difficulty is a percentage

    // ! for starts at 1 because at 0 is player on start
    for (let i = 1; i < boardSize; i++) {
        randomNumber = Math.floor(Math.random() * 100);
        if (randomNumber <= boardDifficulty ) {
            // ? Add enemy to the board
            randomEnemy = DataProvider.Enemies.filter(enemy => enemy.difficulty <= maxEnemyDifficulty && enemy.difficulty >= minEnemyDifficulty)[randomNumber];
            boardEnemies.push(randomEnemy);
        }
    }

    return boardEnemies;
}