document.title = "SimpleExam";

function newgame() {
    var score = 0;
    document.body.innerHTML = '';

    const container = document.createElement("div");
    container.classList.add("container");

    const textElement1 = document.createElement('p');
    textElement1.textContent = "Give the number of Questions :";
    textElement1.classList.add("text");
    container.appendChild(textElement1);

    const xValueElement = document.createElement('p');
    xValueElement.textContent = "equal to or under 20 ☺ ";
    xValueElement.classList.add("text");
    container.appendChild(xValueElement);

    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('placeholder', 'Give the Number...');
    inputElement.classList.add("input");
    container.appendChild(inputElement);
    inputElement.focus();

    const textElement2 = document.createElement('p');
    textElement2.textContent = "Enjoy";
    textElement2.classList.add("text");
    container.appendChild(textElement2);

    document.body.appendChild(container);

    let timeout;
    inputElement.addEventListener('input', function (event) {
        clearTimeout(timeout);
        const inputValue = event.target.value.trim();
        const numericInputValue = Number(inputValue);

        if (inputValue === "" || isNaN(numericInputValue) || numericInputValue <= 0 || numericInputValue > 20) {
            textElement2.textContent = "Give A Correct Value";
        } else {
            textElement2.textContent = "... ☺";
            timeout = setTimeout(function () {
                container.remove();
                createComponent(0, numericInputValue, score);
            }, 3000);
        }
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
    textElement1.textContent = `Question N : ${index + 1}`;
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
    inputElement.focus();

    const textElement2 = document.createElement('p');
    textElement2.textContent = `${st} * ${k}`;
    textElement2.classList.add("text");
    container.appendChild(textElement2);

    inputElement.addEventListener('input', function (event) {
        const inputValue = event.target.value.trim();
        const numericInputValue = Number(inputValue);
        if (inputValue === "" || isNaN(numericInputValue)) {
            textElement2.textContent =` ${st} * ${k}`;
        } else if (numericInputValue === answer) {
            score += 1;
            
            textElement2.textContent = "... ☺";
            setTimeout(function () {

                container.remove();
                createComponent(index + 1, x, score);
            }, 1500);

        } else if (numericInputValue > answer) {
            textElement2.textContent = "choose a lower number";
        } else {
            textElement2.textContent = "choose a higher number";
        }
    });

    document.body.appendChild(container);
}

function result(score) {

    const container = document.createElement("div");
    container.classList.add("container");

    const textElement1 = document.createElement('p');
    textElement1.textContent = "Here is your result:";
    textElement1.classList.add("text");
    container.appendChild(textElement1);

    const xValueElement = document.createElement('p');
    xValueElement.textContent = "You're amazing";
    xValueElement.classList.add("text");
    container.appendChild(xValueElement);

    const resultElement = document.createElement('p');
    resultElement.textContent = `Here is your result = ${score}`;
    container.appendChild(resultElement);
    resultElement.focus();

    const replayButton = document.createElement('input');
    replayButton.setAttribute('type', 'submit');
    replayButton.value = "Replay";
    replayButton.addEventListener('click', newgame);
    replayButton.classList.add("button");
    container.appendChild(replayButton);
    document.body.appendChild(container);
}
document.addEventListener("DOMContentLoaded", newgame);