/////GLOBAL VARIABLES
//==================================

var crystalOne = [];
var crystalTwo = [];
var crystalThree = [];

var numberGoal
//random number between 19 and 120 (for number goal)

var crystalNumber
//random between 1 and 12 (for each clickable crystal)

var totalPoints = [];
//counter (store numbers for each click). Push numbers from clicks and store here.

var winCounter
var lossCounter

/////FUNCTIONS
//==================================

/////goal number
function numGen(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  numberGoal = Math.floor(Math.random() * (max - min +1)) + min;
  console.log(numberGoal);
}

/////crystalOne number
function numGenCrystalOne(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  crystalNumber = Math.floor(Math.random() * (max - min +1)) + min;
  console.log(crystalNumber);
  crystalOne.push(crystalNumber);
  console.log(crystalOne);
};

///crystalTwo number
function numGenCrystalTwo(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  crystalNumber = Math.floor(Math.random() * (max - min +1)) + min;
  console.log(crystalNumber);
  crystalTwo.push(crystalNumber);
  console.log(crystalTwo);
};

///crystalThree number
function numGenCrystalThree(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  crystalNumber = Math.floor(Math.random() * (max - min +1)) + min;
  console.log(crystalNumber);
  crystalThree.push(crystalNumber);
  console.log(crystalThree);
}

/////event listener - on click function
document.getElementById('crystal-1').addEventListener('click', (function increaseTotalPoints() {
    //when clicked, increase totalPoints by crystal's value.
    //How to increase by same value? i.e. if value is 5, how do I add 5?
    document.getElementById('total-points').innerHTML = totalPoints + crystalOne;
}));


function totalPointsAdder() {

};

function reset() {};


/////MAIN PROCESS
//==================================

numGen(19, 120);

//can I use .indexOf() to assign each crystal numGenCrystalOne[i]?
numGenCrystalOne(1, 12);
numGenCrystalTwo(1, 12);
numGenCrystalThree(1, 12);

console.log(crystalOne);
console.log(crystalTwo);
console.log(crystalThree);


//crystalValue(crystalOne);
//crystalValue(crystalTwo);
//crystalValue(crystalThree);
