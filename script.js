const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const submitBtn = document.getElementById("submit");
const messageEl = document.getElementById("message");

let correctAnswer = 0;

function newQuestion() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    correctAnswer = a + b;
    questionEl.textContent = a + " + " + b + " = ?";
    answerEl.value = "";
}

function checkAnswer() {
    const playerAnswer = Number(answerEl.value);

    if (playerAnswer === correctAnswer) {
        messageEl.textContent = "Correct!";
        newQuestion();
    } else {
        messageEl.textContent = "Wrong... try again";
    }
}

submitBtn.addEventListener("click", checkAnswer);

newQuestion();