import {initGame} from './initGame.js';
import {addPlayer} from './addPlayer.js';

let currentPlayers = [];

function app() {
  const startBtn = document.getElementById("start");
  const resetBtn = document.getElementById("reset");  
  const btnAddplayer = document.getElementById('addPlayer');

  startBtn.onclick = () => initGame();
  btnAddplayer.onclick = () => addPlayer();

  resetBtn.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    location.reload('../index.html')
});
}

app();

export {currentPlayers};