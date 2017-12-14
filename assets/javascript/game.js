/////GLOBAL VARIABLES
//==================================

//var crystalsNumDiv;

var numberGoal //random number between 19 and 120 (for number goal)
var totalPoints = 0; //counter (push/ store numbers for each click here).

var winCounter = 0;
var lossCounter = 0;


/////FUNCTIONS
//==================================

/////goal number
function goalNumGen() {
  numberGoal = Math.floor(Math.random() * (120 - 19 +1)) + 19;
  $("#random-number").html("Number Goal: " + numberGoal);
  console.log(numberGoal);
};

//for loop that creates each crystal and assigns it a random number value.

  for (var i = 0; i < 4; i++) {
    var crystalNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    console.log('crystalNumber: ', crystalNumber);

    var crystal = $("<div>");
        crystal.attr({
          "class": 'crystal',
          "random-num": crystalNumber
        });

    $('.crystals').prepend(crystal);
  };

// function totalPointsAdder() {
  // totalPoints += crystalNumber; //totalPoints = totalPoints+crystalNumber
//   console.log(totalPoints);
  $("#total-points").html("Total: " + totalPoints);


/////on click
$(".crystal").click(function(event) {
      totalPoints += parseInt($(this).attr('random-num'));
      $("#total-points").html("Total: " + totalPoints);
      console.log($(this).attr('random-num'));
  });

  // $(".crystal-num").attr('random-num', crystalNumber);
  // //$(".crystal-num").append(crystalNumGen())
  // $("#random-number").html("number goal: " + numberGoal);
  // console.log('crystalNumber: ', crystalNumber);
  // totalPointsAdder();


////if statments
// if (totalPoints === numberGoal) {
//     $("#wins").append(++winCounter);
//   } else if (totalPoints > numberGoal) {
//     $("#losses").append(++loseCounter);
//   };
//
//
// function reset() {};
//

/////MAIN PROCESS
//==================================

goalNumGen();
