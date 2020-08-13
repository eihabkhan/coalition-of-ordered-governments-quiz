const correctAnswers = ["B","A","B","A"];
const form = document.querySelector(".quiz-form")
const resultContainer = document.querySelector(".result")


function updateScore(score) {
    
    
}

form.addEventListener("submit", e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    console.log(userAnswers)
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });
    scrollTo(0,0)
    resultContainer.classList.remove("d-none")

    // Animate Result
    let output = 0;
    const timer = setInterval(()=> {
        resultContainer.querySelector("span").textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);

});

