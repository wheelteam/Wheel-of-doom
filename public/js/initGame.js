import { removeUserFromArray, removeUserFromPlayground } from "./removeUser.js";

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
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    //console.log("Has hecho click en Jugar");
    //console.log(generateRandomWinner(7) + "//" + "Este judador a salido Elegido")
    //randomWinnerParticipant();
    let people = ["Pepe","Juan","Pedro","Luis","Ana","Cristina"];
    console.log("El ganador es: " + people[generateRandomWinner(6)] );
   // console.log(newNumbers);
  // window.alert(combination);
});

resetBtn.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    location.reload('../index.html')
});





/*
function randomWinnerParticipant(){
    
    var nums = [1,2,3,4,5,6,7,8,9,10],//all numbers to be randomized
    ranNums = [],
    i = nums.length,
    j = 0;

    while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
    }
    ranNums.next().value; //To use afterwards (for each time that the numbers are used)
    console.log(ranNums.next().value);

}
*/