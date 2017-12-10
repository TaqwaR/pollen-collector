//GLOBAL VARIABLES
//==================================

var crystalOne
var crystalTwo
var crystalThree
var crystalFour

var numberGoal
//random number between 19 and 120 (for number goal)

var crystalNumber
//random between 1 and 12 (for each clickable crystal)

var totalPoints
//counter (store numbers for each click). Push numbers from clicks and store here.

var winCounter
var lossCounter

//FUNCTIONS
//==================================


function numGen(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  numberGoal = Math.floor(Math.random() * (max - min +1)) + min;
  console.log(numberGoal);
}

// (function ($) {
//   $.fn.numGen = function(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     numberGoal = Math.floor(Math.random() * (max - min +1 )) + min;
//     console.log(numberGoal);
//   };
// });

function crystalValue(crystal) {
  crystal = numGen(1, 12);
};

document.getElementById('flower-1').addEventListener('click', function increaseValue() {
  //when cliked, increase crystal value
  crystalValue(crystalOne + crystalOne);
});

function totalPointsAdder() {}

function reset() {};


//MAIN PROCESS
//==================================

numGen(19, 120);
//$(19, 20).numGen();

numGen(1, 12);
//$(1, 12).numGen();

crystalValue(crystalOne);

crystalValue(crystalTwo);

crystalValue(crystalThree);
