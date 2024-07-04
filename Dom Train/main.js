document.title = "SimpleExam";
let score =0;
document.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement("div");
    container.classList.add("container");

    const textElement1 = document.createElement('p');
    textElement1.textContent = "Give the number of Questions equal to or under 20 ☺ :";
    textElement1.classList.add("text");
    container.appendChild(textElement1);

    const xValueElement = document.createElement('p');
    xValueElement.textContent = "Welcome";
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
                createComponent(0, numericInputValue,score);
            }, 3000); // 3-second delay
        }
    });

    function createComponent(index, x) {
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
                textElement2.textContent = `${st} * ${k}`;
            } else if (numericInputValue === answer) {
                textElement2.textContent = "... ☺";
                score = score + 1;
                setTimeout(function () {
                    container.remove();
                    createComponent(index + 1, x,score);
                }, 1500);
            } else if (numericInputValue > answer) {
                textElement2.textContent = "choose a lower number";
            } else {
                textElement2.textContent = "choose a higher number";
            }
        });

        document.body.appendChild(container);
        
        
    }
});
function result(score){
    const container = document.createElement("div");
    container.classList.add("container");

    const textElement1 = document.createElement('p');
    textElement1.textContent = "Her is you result:";
    textElement1.classList.add("text");
    container.appendChild(textElement1);

    const xValueElement = document.createElement('p');
    xValueElement.textContent = "You're amazing";
    xValueElement.classList.add("text");
    container.appendChild(xValueElement);

    const inputElement = document.createElement('p');
    inputElement.textContent = `Her is you result = ${score}`;
    container.appendChild(inputElement);
    inputElement.focus();

    const textElement2 = document.createElement('p');
    textElement2.textContent = "Enjoy";
    textElement2.classList.add("text");
    container.appendChild(textElement2);

    document.body.appendChild(container);

}