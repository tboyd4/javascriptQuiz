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
    quizTextStart();

}

// Function to reassign quiz text to reflect question

function quizTextStart () {
    
    getQuestion.textContent = questions[0].title;
    getChoiceA.textContent = questions[0].choices[0];
    getChoiceB.textContent = questions[0].choices[1];
    getChoiceC.textContent = questions[0].choices[2];
    getChoiceD.textContent = questions[0].choices[3];

    activateListeners(0);

}






// click event listeners for the four answers. Compares user choice to real answer

function activateListeners (index) {

    getChoiceA.addEventListener("click", function () {
        if (getChoiceA.textContent === questions[index].answer) {
            console.log('answer is correct');
        } else {
            console.log('answer is not correct');
        };
    });
    getChoiceB.addEventListener("click", function () {
        if (getChoiceB.textContent === questions[index].answer) {
            console.log('answer is correct');
        } else {
            console.log('answer is not correct');
        };
    });
    getChoiceC.addEventListener("click", function () {
        if (getChoiceC.textContent === questions[index].answer) {
            console.log('answer is correct');
        } else {
            console.log('answer is not correct');
        };
    });
    getChoiceD.addEventListener("click", function () {
        if (getChoiceD.textContent === questions[index].answer) {
            console.log('answer is correct');
        } else {
            console.log('answer is not correct');
        };
    });
}






