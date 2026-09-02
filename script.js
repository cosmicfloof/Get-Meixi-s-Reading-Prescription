const startButton = document.querySelector("#start-button");
const startScreen = document.querySelector("#start-screen");
const question1 = document.querySelector("#question-1");
const question2 = document.querySelector("#question-2");

const scores = {
  existential: 0,
  skeptic: 0,
  political: 0,
  moral: 0,
  rationalist: 0,
  metaphysical: 0
};

startButton.addEventListener("click", function () {
  startScreen.style.display = "none";
  question1.style.display = "block";
});

const question1Answers = question1.querySelectorAll(".answer");

question1Answers.forEach(function (button) {
  button.addEventListener("click", function () {
    const personality = button.dataset.type;

    scores[personality] += 2;

    question1.style.display = "none";
    question2.style.display = "block";
  });
});
