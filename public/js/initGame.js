import { removeUserFromArray, removeUserFromPlayground } from "./removeUser.js";
import { currentPlayers } from "./app.js";

function initGame() {
    const length = currentPlayers.length;
    const winnerPosition = generateRandomWinner(length);
    const winner = currentPlayers[winnerPosition];
    const winnerBox = document.getElementById(`player${winner}`);
    winnerBox.classList.add('winner');
    setTimeout(9000);

    alert(`${winner} ha sido eliminado.`)

    removeUserFromArray(winner);
    removeUserFromPlayground(winner);
}

function generateRandomWinner(max){
    return  Math.floor(Math.random() * max)
    // expected output: from 0 to 6
}

export {initGame};
