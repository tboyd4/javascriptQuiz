function showScores() {
  // will update with new scores on click event

  let showingScore = "";
  let newText = "";

  console.log("im clicked");
  showingScore = JSON.parse(localStorage.getItem("highscores"))
  console.log(showingScore);
  document.querySelector("#score-one").textContent = showingScore;
}
