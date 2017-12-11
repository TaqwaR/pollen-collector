/////GLOBAL VARIABLES
//==================================

var crystalOne = [];
var crystalTwo = [];
var crystalThree = [];

var numberGoal //random number between 19 and 120 (for number goal)
var crystalNumber //random between 1 and 12 (for each clickable crystal)
var totalPoints = []; //counter (push/ store numbers for each click here).

var winCounter
var lossCounter

/////FUNCTIONS
//==================================

/////goal number
function goalNumGen() {
  numberGoal = Math.floor(Math.random() * (120 - 19 +1)) + 19;
  console.log(numberGoal);
};

/////crystal number
function crystalNumGen(crystal) {
  crystal = Math.floor(Math.random() * (12 - 1 +1)) + 1;
};

////take result of crystalNumGen and push to crystalX array
function crystalPush(crystal) {
  crystal.push(crystalNumGen(crystal));
};

/////event listeners - on click function
document.getElementById('crystal-1').addEventListener('click', (function increaseTotalPoints() {
    //when clicked, increase totalPoints by crystal's value.
    //How to increase by same value? i.e. if value is 5, how do I add 5?
    //curently only allows one click
    document.getElementById('total-points').innerHTML = totalPoints + crystalOne;
}));

function totalPoints() {

};

function reset() {};


/////MAIN PROCESS
//==================================

goalNumGen();

crystalNumGen(crystalOne);
console.log(crystalNumGen(crystalOne));

crystalPush(crystalOne);
console.log(crystalPush(crystalOne));

console.log(crystalOne);
