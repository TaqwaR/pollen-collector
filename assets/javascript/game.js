/////GLOBAL VARIABLES
//==================================

var numberGoal;
var totalPoints = 0;

var winCounter = 0;
var lossCounter = 0;

var crystalOne = Math.floor(Math.random() * (12 - 1 + 1)) +1;
var crystalTwo = Math.floor(Math.random() * (12 - 1 + 1)) +1;
var crystalThree = Math.floor(Math.random() * (12 - 1 + 1)) +1;
var crystalFour = Math.floor(Math.random() * (12 - 1 + 1)) +1;


$("#total-points").html("<p>Total: " + totalPoints + "</p>");

/////FUNCTIONS
//==================================

/////goal number
function goalNumGen() {
  numberGoal = Math.floor(Math.random() * (120 - 19 +1)) + 19;
  $("#random-number").html("<p>Number Goal: " + numberGoal + "</p>");
  console.log(numberGoal);
};

goalNumGen();

/////reset
function reset() {
  goalNumGen();
  totalPoints = 0;

  crystalOne = Math.floor(Math.random() * (12 - 1 + 1)) +1;
  crystalTwo = Math.floor(Math.random() * (12 - 1 + 1)) +1;
  crystalThree = Math.floor(Math.random() * (12 - 1 + 1)) +1;
  crystalFour = Math.floor(Math.random() * (12 - 1 + 1)) +1;

  $("#total-points").html("<p>Total: " + totalPoints + "</p>");
};

/////CLICK EVENTS
//===================================


$(".crystalOne").click(function(event) {
      $(".crystalOne").attr('data-random-num', crystalOne);
      totalPoints += parseInt($(this).attr('data-random-num'));
      $("#total-points").html("<p>Total: " + totalPoints + "</p>");
      console.log($(this).attr('data-random-num'));

      ////if statement
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

$(".crystalTwo").click(function(event) {
        $(".crystalTwo").attr('data-random-num', crystalTwo);
        totalPoints += parseInt($(this).attr('data-random-num'));
        $("#total-points").html("<p>Total: " + totalPoints + "</p>");
        console.log($(this).attr('data-random-num'));

        ////if statement
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

$(".crystalThree").click(function(event) {
        $(".crystalThree").attr('data-random-num', crystalThree);
        totalPoints += parseInt($(this).attr('data-random-num'));
        $("#total-points").html("<p>Total: " + totalPoints + "</p>");
        console.log($(this).attr('data-random-num'));

        ////if statement
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

$(".crystalFour").click(function(event) {
          $(".crystalFour").attr('data-random-num', crystalFour);
          totalPoints += parseInt($(this).attr('data-random-num'));
          $("#total-points").html("<p>Total: " + totalPoints + "</p>");
          console.log($(this).attr('data-random-num'));

            ////if statement
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
