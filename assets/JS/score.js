function updateScores() {
  // will update with new scores on click event

  let updatingArray = JSON.parse(localStorage.getItem("highscores"));

  for (var i = 0; i < updatingArray.length; i++) {
    let showingScore = [];
    showingScore = JSON.parse(localStorage.getItem("highscores"))
    let newEle = document.createElement("li");
    newEle.setAttribute("class", "list-group-item");
    newEle.setAttribute("id", "score-style");
    newEle.textContent = showingScore[i];
    document.querySelector("#dem-scores").appendChild(newEle);
  }

}
