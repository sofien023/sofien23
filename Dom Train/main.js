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
        textElement1.textContent = "Hello everyone ☻";
        textElement1.classList.add("text");
        container.appendChild(textElement1);

        var xValueElement = document.createElement('p');
        xValueElement.textContent = `x equals ${x * i}`;
        xValueElement.classList.add("text");
        container.appendChild(xValueElement);

        var inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('placeholder', 'Enter text...');
        inputElement.classList.add("input");
        container.appendChild(inputElement);

        var textElement2 = document.createElement('p');
        textElement2.textContent = "empty text";
        textElement2.classList.add("text");
        container.appendChild(textElement2);
        inputElement.addEventListener('input', (function(textElement2) {
            return function(event) {
                if (event.target.value.trim() === "") {
                    textElement2.textContent = "empty text";
                } else {
                    textElement2.textContent = event.target.value;
                }
            };
        })(textElement2));
        var buttonElement = document.createElement('input');
        buttonElement.setAttribute('type', 'button');
        buttonElement.setAttribute('value', 'Send');
        buttonElement.classList.add("button");
        container.appendChild(buttonElement);

        buttonElement.addEventListener('click', function() {
            alert("Thank you!");
        });

        document.body.appendChild(container);
    }
});
