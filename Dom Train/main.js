document.title = "SimpleExam";

function newgame() {
    var score = 0;
    document.body.innerHTML = '';

    const container = document.createElement("div");
    container.classList.add("container");

    const textElement1 = document.createElement('p');
    textElement1.textContent = "Give the number of Questions:";
    textElement1.classList.add("text");
    container.appendChild(textElement1);

    const xValueElement = document.createElement('p');
    xValueElement.textContent = "Equal to or under 20 ☺";
    xValueElement.classList.add("text");
    container.appendChild(xValueElement);

    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('placeholder', 'Give the Number...');
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
        const numericInputValue = Number(inputValue);

        if (inputValue === "" || isNaN(numericInputValue) || numericInputValue <= 0 || numericInputValue > 20) {
            textElement2.textContent = "Give a Correct Value";
        }
                container.remove();
                createComponent(0, numericInputValue, score);

        
    });
}

function createComponent(index, x, score) {
    if (index >= x) {
        result(score);
        return;
    }

    const container = document.createElement("div");
    container.classList.add("container");

    const textElement1 = document.createElement('p');
    textElement1.textContent = `Question N: ${index + 1}`;
    textElement1.classList.add("text");
    container.appendChild(textElement1);

    const st = Math.floor(Math.random() * 3) * Math.floor(Math.random() * 10) + index + 1;
    const k = Math.floor(Math.random() * 3) * Math.floor(Math.random() * 3) + 1 + st;
    const answer = st * k;

    const xValueElement = document.createElement('p');
    xValueElement.textContent = `x = ${st}`;
    xValueElement.classList.add("text");
    container.appendChild(xValueElement);

    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('placeholder', 'Enter the answer...');
    inputElement.classList.add("input");
    container.appendChild(inputElement);

    const textElement2 = document.createElement('p');
    textElement2.textContent = `${st} * ${k}`;
    textElement2.classList.add("text");
    container.appendChild(textElement2);

    const submitButton = document.createElement('button');
    submitButton.textContent = "Submit";
    submitButton.classList.add("button");
    container.appendChild(submitButton);

    document.body.appendChild(container);
    inputElement.focus();

    submitButton.addEventListener('click', function () {
        const inputValue = inputElement.value.trim();
        const numericInputValue = Number(inputValue);

        if (inputValue === "" || isNaN(numericInputValue)) {
            textElement2.textContent = `${st} * ${k}`;
        } else if (numericInputValue === answer) {
            score += Math.round(20 / x);
        }
            container.remove();
            createComponent(index + 1, x, score);
    
    });
}

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
    replayButton.addEventListener('click', newgame);
    replayButton.classList.add("button");
    container.appendChild(replayButton);

    document.body.appendChild(container);
}

function grade(score) {
    switch (score) {
        case 0:
            return "You Lose";
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            return "Try Harder";
        case 11:
        case 12:
        case 13:
        case 14:
            return "Keep Going";
        case 15:
        case 16:
        case 17:
            return "You're Amazing!";
        case 18:
        case 19:
            return "Excellent!";
        case 20:
            return "Perfect!";
        default:
            return "Invalid Score";
    }
}

document.addEventListener("DOMContentLoaded", newgame);
