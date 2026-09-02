const startButton = document.querySelector("#start-button");
const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");

startButton.addEventListener("click", function () {
  startScreen.style.display = "none";
  quizScreen.style.display = "block";
});
