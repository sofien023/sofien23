document.addEventListener("DOMContentLoaded", function() {
    var x = prompt("Give the number of components:");

    for (var i = 0; i < x; i++) {
        var container = document.createElement("div");
        container.classList.add("container");
        container.style.display = "inline-block";
        container.style.margin = "10px";
        container.style.padding = "10px";
        container.style.border = "1px solid #ccc";
        container.style.borderRadius = "5px";
        container.style.backgroundColor = "#f9f9f9";

        var textElement1 = document.createElement('p');
        textElement1.textContent = `Question N : ${i}`;
        textElement1.classList.add("text");
        container.appendChild(textElement1);

        var st=Math.floor(Math.random()*3)* Math.floor(Math.random()*10)+i+1;

        k= Math.floor(Math.random()*3)* Math.floor(Math.random()*3)+1+st;
        var xValueElement = document.createElement('p');
        xValueElement.textContent = `x = ${st}`;
        xValueElement.classList.add("text");
        container.appendChild(xValueElement);

        var inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('placeholder', 'Enter The answer...');
        inputElement.classList.add("input");
        container.appendChild(inputElement);

        answer= st * k ;
        var textElement2 = document.createElement('p');
        textElement2.textContent = `${st} * ${k}`;
        textElement2.classList.add("text");
        container.appendChild(textElement2);
        inputElement.addEventListener('input', (function(textElement2) {
            return function(event) {
                if (event.target.value.trim() === "") {
                    textElement2.textContent = `${st} * ${k}`;
                } else if (Number(event.target.value.trim()) === answer) {
                    textElement2.textContent = "... ☺";
                }
                else if (Number(event.target.value.trim())> answer) {
                    textElement2.textContent = "choose a lower number";
                }
                else {
                    textElement2.textContent = "choose a higher number";
                }
            };
        })(textElement2));
        var buttonElement = document.createElement('input');
        buttonElement.setAttribute('type', 'button');
        buttonElement.setAttribute('value', 'Send');
        buttonElement.classList.add("button");
        container.appendChild(buttonElement);
        buttonElement.style.padding= '5px';

        buttonElement.addEventListener('click', function() {
            alert("Thank you!");
        });

        document.body.appendChild(container);
    }
});
