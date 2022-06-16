const btn = document.getElementById('addPlayer');

 let currentPlayers = []

btn.addEventListener('click', function handleClick(event) {
  setTimeout(9000);
  event.preventDefault();


  const firstNameInput = document.getElementById('writeNewPlayer').value;

  while(currentPlayers.length < 7){
    currentPlayers.push(firstNameInput)

    //Desabilitar boton o input 
    if(currentPlayers.length ===6){
      document.getElementById('addPlayer').disabled = true;
      window.alert("Has metido el Num Maximo de participantes");
    }

    break;
  }

    //Array para crear juadores en el campo de juego
    //Eliminar jugador mediante el numero random 

  //addUserToList(firstNameInput);
  console.log(firstNameInput);
  
  firstNameInput.value = '';
});





