const quizForm = document.getElementById("quizForm");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restartBtn");

const correctAnswers = {
  q1: "b",
  q2: "a",
  q3: "b"
};

quizForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(quizForm);
  let score = 0;
  let unanswered = [];

  for (const question of Object.keys(correctAnswers)) {
    const answer = formData.get(question);
    if (!answer) unanswered.push(question);
    if (answer === correctAnswers[question]) score++;
  }

  if (unanswered.length > 0) {
    result.textContent = "Please answer all 3 questions before submitting.";
    result.style.color = "#b45309";
    return;
  }

  result.textContent = `Your final score is ${score} out of 3. ${
    score === 3 ? "Excellent work!" : "Good effort—keep practising!"
  }`;
  result.style.color = "#166534";
  restartBtn.hidden = false;
});

restartBtn.addEventListener("click", function () {
  quizForm.reset();
  result.textContent = "";
  restartBtn.hidden = true;
});
