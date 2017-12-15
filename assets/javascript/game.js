/////GLOBAL VARIABLES
//==================================

//var crystalsNumDiv;

var numberGoal;
var totalPoints = 0;

var winCounter = 0;
var lossCounter = 0;


/////FUNCTIONS
//==================================

/////goal number
function goalNumGen() {
  numberGoal = Math.floor(Math.random() * (120 - 19 +1)) + 19;
  $("#random-number").html("<p>Number Goal: " + numberGoal + "</p>");
  console.log(numberGoal);
};

//for loop that assigns each img a random number value.
  for (var i = 0; i < 4; i++) {
    var crystalNumber = Math.floor(Math.random() * (12 - 1 + 1)) +1;
    console.log('crystalNumber: ', crystalNumber);
    $(".crystal-img").attr('data-random-num', crystalNumber);

    ///add another for loop here
    };


  $("#total-points").html("<p>Total: " + totalPoints + "</p>");

// function totalPointsAdder() {
  // totalPoints += crystalNumber; //totalPoints = totalPoints+crystalNumber
//   console.log(totalPoints);
// }

/////on click
$(".crystal-img").click(function(event) {
      totalPoints += parseInt($(this).attr('data-random-num'));
      $("#total-points").html("<p>Total: " + totalPoints + "</p>");
      console.log($(this).attr('data-random-num'));

      ////if statements --> add this to the onClick event
      if (totalPoints === numberGoal) {
          $("#wins").append("<p>"+ ++winCounter +"</p>");
        } else if (totalPoints > numberGoal) {
          $("#losses").append("<p>"+ ++lossCounter +"</p>");
        };
  });


////if statements --> add this to the onClick event
// if (totalPoints === numberGoal) {
//     $("#wins").append(++winCounter);
//   } else if (totalPoints > numberGoal) {
//     $("#losses").append(++loseCounter);
//   };

console.log(totalPoints);


// function reset() {};


/////MAIN PROCESS
//==================================

goalNumGen();




//////////////////////////////////

//OLD FOR LOOP:
// var crystalNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
// console.log('crystalNumber: ', crystalNumber);
//
// var crystal = $("<div>");
//     crystal.attr({
//       "class": 'crystal',
//       "random-num": crystalNumber
//     });
// $('.crystals').prepend(crystal);

//OLD TOTALPOINTSADDER FUNCTION:
/// function totalPointsAdder() {
  // totalPoints += crystalNumber; //totalPoints = totalPoints+crystalNumber
//   console.log(totalPoints);
// }
