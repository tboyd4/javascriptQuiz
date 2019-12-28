// main code will run here

//grabbing important parts of html through DOM

// selecting all buttons
let getStart = document.querySelector("#btn-start-quiz");
let getChoiceA = document.querySelector("#choice-A");
let getChoiceB = document.querySelector("#choice-B");
let getChoiceC = document.querySelector("#choice-C");
let getChoiceD = document.querySelector("#choice-D");

//selecting question text area
let getQuestion = document.querySelector("#question-text");

// The quiz will begin upon the click of the start button

let firstQuestion = 0; // this will help us cycle questions

function startQuiz() {
  console.log("now I am really here");
  console.log(firstQuestion);

  quizTextStart(firstQuestion);
}

// Timer being displayed for user. 

var timeleft = 75;
var downloadTimer = setInterval(function(){
  document.querySelector("#timer").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.querySelector("#timer").innerHTML = "Finished"
  }
}, 1000);



// This function should change to the next question

function nextQuestion() {
    firstQuestion = firstQuestion + 1;

  if (firstQuestion === 5) {
    getQuestion.textContent = "Quiz is Over";
    getChoiceA.textContent = "";
    getChoiceB.textContent = "";
    getChoiceC.textContent = "";
    getChoiceD.textContent = "";
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
