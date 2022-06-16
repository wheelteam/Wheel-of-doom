
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener('click', function handleClick(event) {
    event.preventDefault();

    console.log("Has hecho en Jugar");

    //randomWinnerParticipant();
});

resetBtn.addEventListener('click', function handleClick(event) {
    event.preventDefault();

    console.log("Has hecho click en Reset");

    //randomWinnerParticipant();
});



function randomWinnerParticipantNumber(){
    //Numero aleatorio entre los valores 0 a 6
  let randomNum = Math.floor(random()* 7);

  //Muestreo del Numero aleatorio asignado
  console.log(randomNum);
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