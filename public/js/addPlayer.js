import { addUserToList } from "./addUserToList.js";
import { currentPlayers } from "./app.js";

function addPlayer() {
  setTimeout(9000);

  const firstInput = document.getElementById('writeNewPlayer');
  const username = capitalizeUser(firstInput.value);
  if (currentPlayers.length < 6){
    
    if (!(currentPlayers.includes(username))){
      currentPlayers.push(username)
      const playerBox = document.createElement('div');
      playerBox.id = `player${username}`;
      playerBox.className = 'player-box';
      playerBox.innerHTML = username;

      const playground = document.getElementById('playground-field');
      playground.appendChild(playerBox);
      addUserToList(username);
    } else {
      window.alert('nombre repetido,introduzca otro nombre plis')
    }
    firstInput.value = '';
    //Desabilitar boton o input 
  } else {
    document.getElementById('addPlayer').disabled = true;
    window.alert("Has metido el Num Maximo de participantes");
  }
};

function capitalizeUser(user) {
  user = user.toLowerCase();
  const firstLetter = user[0];
  console.log(firstLetter);
  const upperCase = firstLetter.toUpperCase();
  console.log(upperCase);
  const capitalizedUser = user.replace(firstLetter, upperCase);

  return capitalizedUser;
}

export {addPlayer};





