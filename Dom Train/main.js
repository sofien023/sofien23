document.title = "SimpleExam";
function createComponent(text1, text2) {
    return new Promise((resolve) => {
        const container = document.createElement("div");
        container.classList.add("container");
        const textElement1 = document.createElement('p');
        textElement1.textContent = text1;
        textElement1.classList.add("text");
        container.appendChild(textElement1);
        const xValueElement = document.createElement('p');
        xValueElement.textContent = text2;
        xValueElement.classList.add("text");
        container.appendChild(xValueElement);
        const inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('placeholder', 'Enter the answer...');
        inputElement.classList.add("input");
        container.appendChild(inputElement);
        const submitButton = document.createElement('button');
        submitButton.textContent = "Submit";
        submitButton.classList.add("button");
        container.appendChild(submitButton);
        document.body.appendChild(container);
        inputElement.focus();
        submitButton.addEventListener('click', function () {
            const inputValue = inputElement.value.trim();
            resolve(inputValue);
            container.remove();
        });});}
async function newgame1() {
    document.body.innerHTML = '';
    const numberOfQuestions = await createComponent("Give the number of Questions:", "Equal to or under 20 ☺");
    const x = Number(numberOfQuestions);
    if (isNaN(x) || x <= 0 || x > 20) {
        newgame1();
        return;}
    let score = 0;
    for (let index = 0; index < x; index++) {
        const st = Math.floor(Math.random() * 3) * Math.floor(Math.random() * 10) + index + 1;
        const k = Math.floor(Math.random() * 3) * Math.floor(Math.random() * 3) + 1 + st;
        const answer = st * k;
        const userAnswer = await createComponent(`Question N: ${index + 1}`, `${st} * ${k}`);
        const numericInputValue = Number(userAnswer.trim());
        if (numericInputValue === answer) {
            score += Math.round(20 / x);}}
    result(score);}
function result(score) {
    const container = document.createElement("div");
    container.classList.add("container");
    const textElement1 = document.createElement('p');
    textElement1.textContent = "Here is your result:";
    textElement1.classList.add("text");
    container.appendChild(textElement1);
    const xValueElement = document.createElement('p');
    xValueElement.textContent = `${grade(score)}`;
    xValueElement.classList.add("text");
    container.appendChild(xValueElement);
    const resultElement = document.createElement('p');
    resultElement.textContent = `Here is your score = ${score}`;
    container.appendChild(resultElement);
    const replayButton = document.createElement('input');
    replayButton.setAttribute('type', 'submit');
    replayButton.value = "Replay";
    replayButton.addEventListener('click', newgame1);
    replayButton.classList.add("button");
    container.appendChild(replayButton);
    document.body.appendChild(container);}
function grade(score) {
    switch (true) {
        case score === 0:
            return "You Lose";
        case score > 0 && score <= 10:
            return "Try Harder";
        case score > 10 && score <= 14:
            return "Keep Going";
        case score > 14 && score <= 17:
            return "You're Amazing!";
        case score > 17 && score < 20:
            return "Excellent!";
        case score === 20:
            return "Perfect!";}}
document.addEventListener("DOMContentLoaded", newgame1);