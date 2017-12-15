/////GLOBAL VARIABLES
//==================================

//var crystalsNumDiv;

var numberGoal;
var totalPoints = 0;

var winCounter = 0;
var lossCounter = 0;


/////FUNCTION
//==================================

/////goal number
function goalNumGen() {
  numberGoal = Math.floor(Math.random() * (120 - 19 +1)) + 19;
  $("#random-number").html("<p>Number Goal: " + numberGoal + "</p>");
  console.log(numberGoal);
};

//===================================

//for loop that assigns each img a random number value.
  for (var i = 0; i < 4; i++) {
    var crystalNumber = Math.floor(Math.random() * (12 - 1 + 1)) +1;
    console.log('crystalNumber: ', crystalNumber);
    $(".crystal-img").attr('data-random-num', crystalNumber);
    ///add another for loop here
    }

  $("#total-points").html("<p>Total: " + totalPoints + "</p>");

/////on click
$(".crystal-img").click(function(event) {
      totalPoints += parseInt($(this).attr('data-random-num'));
      $("#total-points").html("<p>Total: " + totalPoints + "</p>");
      console.log($(this).attr('data-random-num'));

      ////if statements
      if (totalPoints === numberGoal) {
          var win = 1;
          $("#wins").after(winCounter += win);
          reset();
        } else if (totalPoints > numberGoal) {
          var lose = 1;
          $("#losses").after(lossCounter += lose);
          reset();
        };
  });


console.log(totalPoints);


function reset() {
  goalNumGen();
  totalPoints = 0;
};

//==================================

goalNumGen();
