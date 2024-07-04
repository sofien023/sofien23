document.title = "SimpleExam";
        document.addEventListener("DOMContentLoaded", function () {
            let x;
            do {
                x = prompt("Give the number of components equal to or under 20 ☺ :");
                x = Number(x);
            } while (x === null || isNaN(x) || x < 0 || x > 20);

            let currentComponent = 0;

            function createComponent(index) {
                if (index >= x) {
                    alert("Thank you!");
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
                        setTimeout(function () {
                            container.remove();
                            createComponent(index + 1);
                        }, 1500);
                    } else if (numericInputValue > answer) {
                        textElement2.textContent = "choose a lower number";
                    } else {
                        textElement2.textContent = "choose a higher number";
                    }
                });

                document.body.appendChild(container);
            }

            createComponent(currentComponent);
        });