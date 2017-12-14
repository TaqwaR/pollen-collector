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

    // $(".crystal-img").attr('random-num', crystalNumber);
    // //$(".crystal-img").append('random-num', crystalNumber);
  };


// function totalPointsAdder() {
  // totalPoints += crystalNumber; //totalPoints = totalPoints+crystalNumber
//   console.log(totalPoints);
  $("#total-points").html("<p>Total: " + totalPoints + "</p>");


/////on click
$(".crystal-img").click(function(event) {
      totalPoints += parseInt($(this).attr('random-num'));
      $("#total-points").html("<p>Total: " + totalPoints + "</p>");
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
