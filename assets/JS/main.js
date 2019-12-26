// main code will run here

//grabbing important parts of html through DOM

// selecting all buttons
let getStart = document.querySelector('#btn-start-quiz');
let getChoiceA = document.querySelector('#choice-A');
let getChoiceB= document.querySelector('#choice-B');
let getChoiceC = document.querySelector('#choice-C');
let getChoiceD = document.querySelector('#choice-D');

//selecting question text area
let getQuestion = document.querySelector('#question-text');


// The quiz will begin upon the click of the start button

function startQuiz () {
    console.log('now I am really here');
    quizText();
}

// Function to reassign quiz text to reflect question

function quizText () {
    getQuestion.textContent = questions[0].title;
    getChoiceA.textContent = questions[0].choices[0];
    getChoiceB.textContent = questions[0].choices[1];
    getChoiceC.textContent = questions[0].choices[2];
    getChoiceD.textContent = questions[0].choices[3];
}




