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

//for loop that creates each crystal and assigns it a random number value.

  for (var i = 0; i < 4; i++) {
    // var crystalNumber = Math.floor(Math.random() * (12 - 1 +1)) + 1;
    // console.log('crystalNumber: ', crystalNumber);
    //
    // var crystal = $("<div>");
    //     crystal.attr({
    //       "class": 'crystal',
    //       "random-num": crystalNumber
    //     });
    // $('.crystals').prepend(crystal);

    var crystalNumber = Math.floor(Math.random() * (12 - 1 + 1)) +1;
    console.log('crystalNumber: ', crystalNumber);
    $(".crystal-img").attr('random-num', crystalNumber);
  };

  $("#total-points").html("<p>Total: " + totalPoints + "</p>");

// function totalPointsAdder() {
  // totalPoints += crystalNumber; //totalPoints = totalPoints+crystalNumber
//   console.log(totalPoints);
// }

/////on click
$(".crystal-img").click(function(event) {
      goalNumGen();
      totalPoints += parseInt($(this).attr('random-num'));
      $("#total-points").html("<p>Total: " + totalPoints + "</p>");
      console.log($(this).attr('random-num'));
  });


////if statments
if (totalPoints === numberGoal) {
    $("#wins").append(++winCounter);
  } else if (totalPoints > numberGoal) {
    $("#losses").append(++loseCounter);
  };


// function reset() {};


/////MAIN PROCESS
//==================================

//goalNumGen();
