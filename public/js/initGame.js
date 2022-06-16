
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    console.log("Has hecho click en Jugar");
    window.alert("Has hecho click en Boton Start");
    console.log(generateRandomWinner(7) + "//" + "Este judador a salido Elegido")
    //randomWinnerParticipant();
    generateName();
    generateRandomWinner()
   // console.log(newNumbers);
  // window.alert(combination);
});

resetBtn.addEventListener('click', function handleClick(event) {
    event.preventDefault();

    console.log("Has hecho en click en RESET");
    //window.alert("Has hecho click en Boton Reset");
   
    //randomWinnerParticipant();

});

function generateRandomWinner(max){

   return  Math.floor(Math.random() * max)
   // expected output: from 0 to 6

}



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