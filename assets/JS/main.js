// main code will run here

//grabbing important parts of html through DOM

// selecting all buttons
var getStart = document.querySelector("#btn-start-quiz");
var getChoiceA = document.querySelector("#choice-A");
var getChoiceB = document.querySelector("#choice-B");
var getChoiceC = document.querySelector("#choice-C");
var getChoiceD = document.querySelector("#choice-D");

//selecting question text area
var getQuestion = document.querySelector("#question-text");

// The quiz will begin upon the click of the start button

var firstQuestion = 0; // this will help us cycle questions
var timeleft;

function startQuiz() {
  console.log("now I am really here");
  console.log(firstQuestion);

  quizTextStart(firstQuestion);

  // Timer being displayed for user.
  timeleft = 75;
  var downloadTimer = setInterval(function() {
    document.querySelector("#timer").innerHTML =
      timeleft + " seconds remaining";
    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.querySelector("#timer").innerHTML = "Finished";
    }
  }, 1000);
}

// This function should change to the next question

function nextQuestion() {
  // first question actually represents the next question. I just haven't changed the name yet
  firstQuestion = firstQuestion + 1;

  if (firstQuestion === 5) {
    endTiming = timeleft;
    console.log(endTiming);
    getQuestion.textContent = "Quiz is Over";
    getChoiceA.textContent = "";
    getChoiceB.textContent = "";
    getChoiceC.textContent = "";
    getChoiceD.textContent = "";
    endQuiz(); // this functions runs our end of quiz stuff (getting score, asking for initials, storing in local storage)
  } else {
    quizTextStart(firstQuestion);
  }
}

// Function to reassign quiz text to reflect question

function quizTextStart(i) {
  console.log(firstQuestion);

  getQuestion.textContent = questions[i].title;
  getChoiceA.textContent = questions[i].choices[0];
  getChoiceB.textContent = questions[i].choices[1];
  getChoiceC.textContent = questions[i].choices[2];
  getChoiceD.textContent = questions[i].choices[3];
}

// click event listeners for the four answers. Compares user choice to real answer

getChoiceA.addEventListener("click", function(event) {
  event.preventDefault();
  event.stopPropagation();
  if (getChoiceA.textContent === questions[firstQuestion].answer) {
    console.log("answer is correct");
  } else {
    console.log("answer is not correct");
    timeleft = timeleft - 15;
  }
  nextQuestion();
});
getChoiceB.addEventListener("click", function(event) {
  event.preventDefault();
  event.stopPropagation();
  if (getChoiceB.textContent === questions[firstQuestion].answer) {
    console.log("answer is correct");
  } else {
    console.log("answer is not correct");
    timeleft = timeleft - 15;
  }
  nextQuestion();
});
getChoiceC.addEventListener("click", function(event) {
  event.preventDefault();
  event.stopPropagation();
  if (getChoiceC.textContent === questions[firstQuestion].answer) {
    console.log("answer is correct");
  } else {
    console.log("answer is not correct");
    timeleft = timeleft - 15;
  }
  nextQuestion();
});
getChoiceD.addEventListener("click", function(event) {
  event.preventDefault();
  event.stopPropagation();
  if (getChoiceD.textContent === questions[firstQuestion].answer) {
    console.log("answer is correct");
  } else {
    console.log("answer is not correct");
    timeleft = timeleft - 15;
  }
  nextQuestion();
});

var userInit;
var userScore = 0;

var scoreArray = [];

var pushingThis;

function endQuiz() {
  // This needs to get final score, display final score, and give option to store in local storage
  if (endTiming > 65) {
    userScore = userScore + 500;
    alert("You scored a " + userScore + ", which is a perfect score!");
    userInit = prompt(
      "Please enter your initials, and we'll save your score for you!"
    );
  } else if (endTiming < 65 && endTiming > 50) {
    userScore = userScore + 400;
    alert(
      "You scored a " + userScore + ", which is a really solid score. GG bro."
    );
    userInit = prompt(
      "Please enter your initials, and we'll save your score for you!"
    );
  } else if (endTiming < 50 && endTiming > 35) {
    userScore = userScore + 300;
    alert(
      "You scored a " +
        userScore +
        ", which is pretty good, but you should keep practicing"
    );
    userInit = prompt(
      "Please enter your initials, and we'll save your score for you!"
    );
  } else if (endTiming > 35 && endTiming > 20) {
    userScore = userScore + 200;
    alert(
      "You scored a " +
        userScore +
        ", not gonna lie, this wasn't really fantastic"
    );
    userInit = prompt(
      "Please enter your initials, and we'll save your score for you!"
    );
  } else {
    userScore = userScore + 100;
    alert(
      "You scored a " +
        userScore +
        ", which means you are the New York Jets of Programming"
    );
    userInit = prompt(
      "Please enter your initials, and we'll save your score for you!"
    );
  }

  location.replace("./index.html");

  addStorage(userInit);
}

// This function will put the scores into an array
function addStorage(userInitials) {
  
  scoreArray = JSON.parse(localStorage.getItem("highscores"));

  pushingThis = userInitials + " " + userScore;

  scoreArray.push(pushingThis);

  localStorage.setItem("highscores", JSON.stringify(scoreArray));

  console.log(scoreArray);
}
