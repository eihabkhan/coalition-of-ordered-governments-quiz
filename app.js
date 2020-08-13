const correctAnswers = ["B","A","B","A"];
const form = document.querySelector(".quiz-form")
const resultContainer = document.querySelector(".result")
const scoreSpan = resultContainer.querySelector("span");

function updateScore(score) {
    resultContainer.classList.remove("d-none")
    scoreSpan.textContent = `${score}%`
}

form.addEventListener("submit", e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q3.value]
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });
    console.log(scoreSpan.textContent)
    updateScore(score);
    scrollTo(0,0)
});

