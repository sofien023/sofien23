document.addEventListener("DOMContentLoaded", function() {
    let x;
    do {
        x = prompt("Give the number of components equal or under 20 ☺ :");
        x = Number(x);
    } while (x === null || isNaN(x) || x < 0 || x > 20);
    
    for (let i = 0; i < x; i++) {
        const container = document.createElement("div");
        container.classList.add("container");
        container.style.display = "inline-block";
        container.style.margin = "10px";
        container.style.padding = "10px";
        container.style.border = "1px solid #ccc";
        container.style.borderRadius = "5px";
        container.style.backgroundColor = "#f9f9f9";

        const textElement1 = document.createElement('p');
        textElement1.textContent = `Question N : ${i + 1}`;
        textElement1.classList.add("text");
        container.appendChild(textElement1);

        const st = Math.floor(Math.random() * 3) * Math.floor(Math.random() * 10) + i + 1;
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

        inputElement.addEventListener('input', (function(st, k, answer, textElement2) {
            return function(event) {
                const inputValue = Number(event.target.value.trim());
                if (isNaN(inputValue)) {
                    textElement2.textContent = `${st} * ${k}`;
                } else if (inputValue === answer) {
                    textElement2.textContent = "... ☺";
                } else if (inputValue > answer) {
                    textElement2.textContent = "choose a lower number";
                } else {
                    textElement2.textContent = "choose a higher number";
                }
            };
        })(st, k, answer, textElement2));

        const buttonElement = document.createElement('input');
        buttonElement.setAttribute('type', 'button');
        buttonElement.setAttribute('value', 'Send');
        buttonElement.classList.add("button");
        container.appendChild(buttonElement);
        buttonElement.style.padding = '5px';

        buttonElement.addEventListener('click', function() {
            alert("Thank you!");
        });

        document.body.appendChild(container);
    }
});
