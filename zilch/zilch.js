// ---------------------------------------------//
//make the dice images as a variable
document.getElementById("results").className = "hideSign";
document.getElementById("results").className = "hideZonk";

document.getElementById("confirm").className = "confirmHide";
var dice1, dice2, dice3, dice4, dice5, dice6;

//variable for the round total

var clicked1 = document.getElementById("dice1");
var clicked2 = document.getElementById("dice2");
var clicked3 = document.getElementById("dice3");
var clicked4 = document.getElementById("dice4");
var clicked5 = document.getElementById("dice5");
var clicked6 = document.getElementById("dice6");
var yesBtn = document.getElementById("yesBtn");

var yesBtn1 = document.getElementById("keptScore");
var noBtn1 = document.getElementById("noBtn1");
var showNow = document.getElementById("showNow");
var i;
var start = document.getElementById("dice");
document.getElementById("rollScore").className = "rollShow";
document.getElementById("roundScore").className = "showScore";
start.className = "end";
var button = document.getElementById("roll");

var reRoll = false;
var list2 = document.querySelectorAll("clicked");
var myCollection2 = Array.from(list2);
var newArray = [0, 0, 0, 0, 0, 0];
var diceCount = [0, 0, 0, 0, 0, 0];
var roundScore = [];
var all6 = 0,
  straight1 = 0,
  triple1 = 0,
  triple2 = 0,
  triple3 = 0,
  triple4 = 0,
  triple5 = 0,
  triple6 = 0,
  trip1 = 0,
  trip2 = 0,
  trip3 = 0,
  trip4 = 0,
  trip5 = 0,
  trip6 = 0,
  score1 = 0,
  score5 = 0;

var sum1;
start.className = "start";
button.className = "buttonShow";
//a scoring variable needed earlier in the code.

//Initiate the dice rolls with a button click

var rollOnce = document.getElementById("roll");
//document.getElementById("roundScore").innerHTML = "Score for this roll is = " + 0;

//Add event Listener on the Roll button
rollOnce.addEventListener("click", function () {
  clickedDice();
  newResults();

  var roll = roll++;
  confirm.className = "confirmHide";

  if (roll >= 1) {
    document.getElementById("roll").innerHTML = "ReRoll";

    document.getElementById("rollScore").innerHTML =
      "Score for this roll is = " + " " + 0;

    button.className = "buttonHide";
  }
});

// create array for the dice roll results

var result = [0, 0, 0, 0, 0, 0];
var newSet = [];

function clickedDice() {
  var list = document.querySelectorAll(".click");
  var myCollection = Array.from(list);

  confirm.className = "confirmShow";

  //create an array from dice that are to be rolled again

  result = [0, 0, 0, 0, 0, 0];

  //This part simulates the dice roll for each die
  if (myCollection.includes(clicked1)) {
    result[0] = Math.ceil(Math.random() * 6);
    newSet[0] = result[0];
  }

  if (myCollection.includes(clicked2)) {
    result[1] = Math.ceil(Math.random() * 6);
    newSet[1] = result[1];
  }
  if (myCollection.includes(clicked3)) {
    result[2] = Math.ceil(Math.random() * 6);
    newSet[2] = result[2];
  }
  if (myCollection.includes(clicked4)) {
    result[3] = Math.ceil(Math.random() * 6);
    newSet[3] = result[3];
  }
  if (myCollection.includes(clicked5)) {
    result[4] = Math.ceil(Math.random() * 6);
    newSet[4] = result[4];
  }
  if (myCollection.includes(clicked6)) {
    result[5] = Math.ceil(Math.random() * 6);
    newSet[5] = result[5];
  }

  // Match dice# with the correct dice image
  var diceImages = new Image([6]);

  diceImages = [
    (diceImages[0] = "purple_dice_0.png"),
    (diceImages[1] = "purple_dice_1.png"),
    (diceImages[2] = "purple_dice_2.png"),
    (diceImages[3] = "purple_dice_3.png"),
    (diceImages[4] = "purple_dice_4.png"),
    (diceImages[5] = "purple_dice_5.png"),
    (diceImages[6] = "purple_dice_6.png"),
  ];
  document.getElementById("dice1").src = diceImages[result[0]];
  document.getElementById("dice2").src = diceImages[result[1]];
  document.getElementById("dice3").src = diceImages[result[2]];
  document.getElementById("dice4").src = diceImages[result[3]];
  document.getElementById("dice5").src = diceImages[result[4]];
  document.getElementById("dice6").src = diceImages[result[5]];

  getResults();
}

function getResults() {
  var diceResults = [0, 0, 0, 0, 0, 0];

  var list = document.querySelectorAll(".click");
  var myCollectionNew = Array.from(list);

  // Keep count of each number in the kept dice to help determine score.
  for (i = 0; i < diceResults.length; i++) {
    switch (newSet[i]) {
      case 1:
        diceResults[0]++;
        break;
      case 2:
        diceResults[1]++;
        break;
      case 3:
        diceResults[2]++;
        break;
      case 4:
        diceResults[3]++;
        break;
      case 5:
        diceResults[4]++;
        break;
      case 6:
        diceResults[5]++;
        break;
    }
  }
  console.log(diceResults + " " + "diceResults");

  var six = false,
    straight = false,
    threeKind = false,
    tripleOne = false,
    tripleTwo = false,
    tripleThree = false,
    tripleFour = false,
    tripleFive = false,
    tripleSix = false,
    haveOne = false,
    haveFive = false,
    haveZonk = false;

  for (i = 0; i < myCollectionNew.length; i++) {
    if (diceResults[i] == 6) {
      six = true;

      break;
    } else if (
      diceResults[0] == 1 &&
      diceResults[1] == 1 &&
      diceResults[2] == 1 &&
      diceResults[3] == 1 &&
      diceResults[4] == 1 &&
      diceResults[5] == 1
    ) {
      straight = true;

      break;
    } else if (
      diceResults[i] == 3 ||
      diceResults[i] == 4 ||
      diceResults[i] == 5
    ) {
      threeKind = true;

      if (diceResults[0] >= 3) {
        tripleOne = true;
      } else if (diceResults[1] >= 3) {
        tripleTwo = true;
      } else if (diceResults[2] >= 3) {
        tripleThree = true;
      } else if (diceResults[3] >= 3) {
        tripleFour = true;
      } else if (diceResults[4] >= 3) {
        tripleFive = true;
        // haveFive = false;
      } else if (diceResults[5] >= 3) {
        tripleSix = true;
      }
    }
  }

  //if the above are false, check for 1's and 5's
  for (i = 0; i < diceResults.length; i++) {
    if (diceResults[0] > 0) {
      haveOne = true;
      haveZonk = false;
    }
    if (diceResults[4] > 0) {
      haveFive = true;
      haveZonk = false;
    }
  }

  //Check for a zonk
  if (
    six === false &&
    straight === false &&
    threeKind === false &&
    haveOne === false &&
    haveFive === false
  ) {
    haveZonk = true;
  }

  // if the zonk is true then execute the following:
  if (haveZonk === true) {
    document.getElementById("confirm").className = "confirmShow";
    document.getElementById("runScore").innerHTML =
      "You lose this rounds points. Roll again.";
    document.getElementById("results").className = "showZonk";
    document.getElementById("results").className = "showSign";
    button.className = "buttonHide";
  } else if (haveZonk === false) {
    var confirmMessage = "Please select your scoring dice.";
    document.getElementById("confirm").innerHTML = confirmMessage;
  }
}
//execute this if haveZonk is true, and "Yes Continue " is clicked.
var zonkZone = document.getElementById("results");
zonkZone.addEventListener("click", function () {
  //reset the roundScore to zero
  document.getElementById("roll").className = "buttonHide";
  document.getElementById("roundScore").innerHTML =
    "Score for this roll is = " + " " + 0;
  document.getElementById("rollScore").className = "rollShow";
  document.getElementById("rollScore").innerHTML =
    "Score for this roll is = " + " " + 0;
  document.getElementById("runScore").className = "runHide";

  //reset the dice images to a black dice image.
  var diceImages = new Image([1]);
  document.getElementById("results").className = "hideSign";
  diceImages = [(diceImages[0] = "purple_dice_0.png")];
  //Reset the class name to include in the new dice roll

  document.getElementById("dice1").className = "click";
  document.getElementById("dice2").className = "click";
  document.getElementById("dice3").className = "click";
  document.getElementById("dice4").className = "click";
  document.getElementById("dice5").className = "click";
  document.getElementById("dice6").className = "click";

  document.getElementById("dice1").src = diceImages[0];
  document.getElementById("dice2").src = diceImages[0];
  document.getElementById("dice3").src = diceImages[0];
  document.getElementById("dice4").src = diceImages[0];
  document.getElementById("dice5").src = diceImages[0];
  document.getElementById("dice6").src = diceImages[0];

  //change class to show the roll button
  document.getElementById("roll").className = "buttonShow";

  //reset the roundScore to 0 to start accumulating a new round total;
  newArray = [0, 0, 0, 0, 0, 0];

  console.log(newArray + " " + " This is the newArray after a Zonk reset");
  newReset();
  resetResults();
});

// <-- This closes the function getResults

function resetResults() {
  var diceResults = [];
  var newSet = [];

  for (i = 0; i < diceResults.length; i++) {
    diceResults[i] = 0;
  }
  for (i = 0; i < newSet.length; i++) {
    newSet[i] = 0;
  }
}

//running score amount variables

// Select which dice to "keep and score"
dice1 = clicked1.addEventListener("click", function () {
  dice1 = event.target;
  $(clicked1).toggleClass("click clicked");

  newArray[0] = result[0];
});

dice2 = clicked2.addEventListener("click", function () {
  dice2 = event.target;

  $(clicked2).toggleClass("click clicked");

  newArray[1] = result[1];
});

dice3 = clicked3.addEventListener("click", function () {
  dice3 = event.target;

  $(clicked3).toggleClass("click clicked");

  newArray[2] = result[2];
});

dice4 = clicked4.addEventListener("click", function () {
  dice4 = event.target;

  $(clicked4).toggleClass("click clicked");

  newArray[3] = result[3];
});

dice5 = clicked5.addEventListener("click", function () {
  dice5 = event.target;
  $(clicked5).toggleClass("click clicked");

  newArray[4] = result[4];
});

dice6 = clicked6.addEventListener("click", function () {
  dice6 = event.target;

  $(clicked6).toggleClass("click clicked");

  newArray[5] = result[5];
});

console.log(newArray + " " + " This is the newArray result");
//Add an event for any of the dice that get clicked to pop up the confirm message.

//When any of the dice are clicked this confirm message will pop up
var dice = document.getElementById("dice");
dice.addEventListener("click", function () {
  dice = event.target;

  showNow.className = "show";
  button.className = "buttonHide";
  //Not sure if this even removes the listener event but will try anyway.
});

var newScore1;

var keepScore;

//if the Yes button on the confirm message is clicked this will run;
yesBtn.addEventListener("click", function () {
  yesBtn = event.target;

  confirm.className = "confirmHide"; //hide the confirm message

  diceCount = [0, 0, 0, 0, 0, 0];

  var newTotal;
  newResults();

  //running total for the round ;

 roundScore = [
    all6,
    straight1,
    triple1,
    triple2,
    triple3,
    triple4,
    triple5,
    triple6,
    trip1,
    trip2,
    trip3,
    trip4,
    trip5,
    trip6,
    score1,
    score5,
  ];
  sum1 = 0;

  for (i = 0; i < roundScore.length; i++) {
    sum1 += roundScore[i];
  }
  console.log(roundScore + " " + "RoundScore Array");

  newScore1 += 0;
  newTotal += newScore1 + sum1;

  //update the rollScore from above
  document.getElementById("rollScore").innerHTML =
    "Score for this roll is = " + " " + sum1;

  //update the roundScore
  document.getElementById("roundScore").innerHTML =
    "Score for this round is = " + " " + newTotal;

  //roundScore = 0;

  showNow.className = "hide";
  button.className = "buttonShow";

  //if the newScore1 reaches 500 then show this message.
  if (newScore1 > 500) {
    document.getElementById("keptScore").className = "showKept";
    document.getElementById("roll").className = "buttonHide";
  } else if (keepScore > 500 && newScore1 > 0) {
    document.getElementById("keptScore").className = "showKept";
    checkForWinner();
  }
  //Array from the clicked dice to use to see if a reRoll is needed because all dice have scored.

  list2 = document.querySelectorAll(".clicked");
  myCollection2 = Array.from(list2);

  if (myCollection2.length >= 6) {
    reRoll = true;

    if (reRoll === true) {
      confirm.innerHTML = "You get to Roll Again! Good luck!!";
      confirm.className = "confirmShow";

      document.getElementById("rollScore").innerText =
        "Score for this round is = " + " " + sum1;
      document.getElementById("roundScore").innerHTML =
        "Score for this roll is = " + " " + newTotal;

      var diceImages = new Image([1]);

      diceImages = [(diceImages[0] = "purple_dice_0.png")];
      document.getElementById("dice1").src = diceImages[0];
      document.getElementById("dice2").src = diceImages[0];
      document.getElementById("dice3").src = diceImages[0];
      document.getElementById("dice4").src = diceImages[0];
      document.getElementById("dice5").src = diceImages[0];
      document.getElementById("dice6").src = diceImages[0];

      document.getElementById("dice1").className = "click";
      document.getElementById("dice2").className = "click";
      document.getElementById("dice3").className = "click";
      document.getElementById("dice4").className = "click";
      document.getElementById("dice5").className = "click";
      document.getElementById("dice6").className = "click";

      confirm.className = "confirmHide";
    }
  } else {
    reRoll = false;
  }
});

var noBtn1;
noBtn1.addEventListener("click", function () {
  noBtn1 = event.target;
  document.getElementById("keptScore").className = "hide";
  //document.getElementById("rollScore").innerHTML = "Score for this round is = " + " " + sum1;
  //document.getElementById("roundScore").innerHTML = "Score for this round is = " + " " + newTotal;
});
var newScore;

yesBtn1.addEventListener("click", function () {
  yesBtn1 = event.target;
  button.className = "buttonHide";
  document.getElementById("runScore").innerHTML =
    " You get to start rolling again ";

  keepScore = [
    all6,
    straight1,
    triple1,
    triple2,
    triple3,
    triple4,
    triple5,
    triple6,
    trip1,
    trip2,
    trip3,
    trip4,
    trip5,
    trip6,
    score1,
    score5,
  ];

  var sum = 0;
  for (i = 0; i < keepScore.length; i++) {
    sum += keepScore[i];
  }
  console.log(sum + " " + "This is the sum of the array");

  newScore = 0;

  var total = (newScore += sum);

  document.getElementById("total").innerHTML = total;

  document.getElementById("rollScore").innerHTML =
    "Score for this roll is = " + 0;
  document.getElementById("roundScore").innerHTML =
    "Score for this round is = " + 0;

  document.getElementById("keptScore").className = "hide";

  var diceImages = new Image([1]);
  diceImages = [(diceImages[0] = "purple_dice_0.png")];

  document.getElementById("dice1").className = "click";
  document.getElementById("dice2").className = "click";
  document.getElementById("dice3").className = "click";
  document.getElementById("dice4").className = "click";
  document.getElementById("dice5").className = "click";
  document.getElementById("dice6").className = "click";

  document.getElementById("dice1").src = diceImages[0];
  document.getElementById("dice2").src = diceImages[0];
  document.getElementById("dice3").src = diceImages[0];
  document.getElementById("dice4").src = diceImages[0];
  document.getElementById("dice5").src = diceImages[0];
  document.getElementById("dice6").src = diceImages[0];

  resetResults();

  button.className = "buttonShow";

  checkForWinner();
});

function checkForWinner() {
  if (newScore >= 2500) {
    alert("You won!! Thanks for playing");
    resetResults();
    start.className = "end";
    button.className = "buttonHide";
    start.className = "start";
  }
}

//console.log(roundScore + " " + "This is the RoundScore Array after Reset");

// a function to use after selecting clicked dice to help with scoring
function newResults() {
  var diceCount = [0, 0, 0, 0, 0, 0];

  // let score = score1 + score2 + score3 + score4 + score5 + score6 + triple1 + triple2 + triple3 + triple4 + triple5 + triple6 + straight + all6 + zonk;

  // Keep count of each number in the kept dice to help determine score.
  for (i = 0; i < diceCount.length; i++) {
    switch (newArray[i]) {
      case 1:
        diceCount[0]++;
        break;
      case 2:
        diceCount[1]++;
        break;
      case 3:
        diceCount[2]++;
        break;
      case 4:
        diceCount[3]++;
        break;
      case 5:
        diceCount[4]++;
        break;
      case 6:
        diceCount[5]++;
        break;
    }
  }
  console.log(diceCount + " " + "diceCount");

  var six = false,
    straight = false,
    threeKind = false,
    tripleOne = false,
    tripleTwo = false,
    tripleThree = false,
    tripleFour = false,
    tripleFive = false,
    tripleSix = false,
    triplePair = false,
    triplePair1 = false,
    triplePair2 = false,
    triplePair3 = false,
    triplePair4 = false,
    triplePair5 = false,
    triplePair6 = false,
    haveOne = false,
    haveFive = false;

  for (i = 0; i < diceCount.length; i++) {
    if (diceCount[i] == 6) {
      six = true;
    } else if (
      diceCount[0] == 1 &&
      diceCount[1] == 1 &&
      diceCount[2] == 1 &&
      diceCount[3] == 1 &&
      diceCount[4] == 1 &&
      diceCount[5] == 1
    ) {
      straight = true;
    }

    //check for a three of a kind
    if (diceCount[i] >= 3 && six === false) {
      threeKind = true;

      //if one three of a kind is true, check for which number is a three of a kind.
      if (diceCount[0] >= 3 && six === false) {
        tripleOne = true;
        haveOne = false;
      } else if (diceCount[5] >= 3 && six === false) {
        tripleSix = true;
      } else if (diceCount[4] == 3) {
        tripleFive = true;
        haveFive = false;
      } else if (diceCount[3] >= 3 && six === false) {
        tripleFour = true;
      } else if (diceCount[2] >= 3 && six === false) {
        tripleThree = true;
      } else if (diceCount[1] >= 3 && six === false) {
        tripleTwo = true;
      }

      if (threeKind === true) {
        for (var j = 0; j < diceCount.length; i++) {
          if (diceCount[j] == 3) {
            triplePair = true;
          } else {
            triplePair = false;
          }

          if (triplePair) {
            if (diceCount[0] == 3) {
              triplePair1 = true;
            } else if (diceCount[1] == 3) {
              triplePair2 = true;
            } else if (diceCount[2] == 3) {
              triplePair3 = true;
            } else if (diceCount[3] == 3) {
              triplePair4 = true;
            } else if (diceCount[4] == 3) {
              triplePair5 = true;
            } else if (diceCount[5] == 3) {
              triplePair6 = true;
            }
          }
        }
      }
    }
    //if false to having six matching dice, or a straight, and a three of a kind, then check for ones and fives.

    //if the above are false, check for 1's and 5's
  }

  if (diceCount[0] > 3 && triple1 === true) {
    haveOne = true;
  } else if (triple1 === false && diceCount[0] > 0) {
    haveOne = true;
  }

  if (triple5 === true && diceCount[4] > 3) {
    haveFive = true;
  } else if (triple5 === false && diceCount[4] > 0) {
    haveFive = true;
  }

  // Set scoring points
  if (six) {
    all6 = 600;
  } else if (straight) {
    straight1 = 700;
  } else if (threeKind) {
    if (tripleOne) triple1 = 1000;
    if (tripleTwo) triple2 = 200;
    if (tripleThree) triple3 = 300;
    if (tripleFour) triple4 = 400;
    if (tripleFive) triple5 = 500;
    if (tripleSix) triple6 = 600;
  }

  if (triplePair) {
    if (triplePair1) trip1 = 1000;
    if (triplePair6) trip6 = 600;
    if (triplePair5) trip5 = 500;
    if (triplePair4) trip4 = 400;
    if (triplePair3) trip3 = 300;
    if (triplePair2) trip2 = 200;
  }
  if (triple1 === true && diceCount[0] > 3) {
    score1 = (diceCount[0] - 3) * 100;
  } else if (triple1 === false && diceCount[0] > 0) {
    score1 = diceCount[0] * 100;
  }

  if (triple5 === true && diceCount[4] > 3) {
    score5 = (diceCount[4] - 3) * 50;
  } else if (triple5 === false && diceCount[4] > 0) {
    score5 = diceCount[4] * 50;
  }
}
