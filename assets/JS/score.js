function showScores() {
  // will update with new scores on click event

  let lastUserInit = "";
  let lastUserScore = "";
  let newText = "";

  console.log("im clicked");
  lastUserInit = localStorage.getItem("initials");
  lastUserScore = localStorage.getItem("score");
  newText = "User " + lastUserInit + " scored a " + lastUserScore;
  console.log(newText);
  document.querySelector("#score-one").textContent = newText;
}
