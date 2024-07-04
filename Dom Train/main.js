document.addEventListener("DOMContentLoaded", function() {
    var x = prompt("Enter a number:");
    alert(`x = ${x - 5}`);

    for (var i = 0; i < x; i++) {
        var container = document.createElement("div");
        container.style.display = "inline-block";
        container.style.width = "200px";
        container.style.height = "200px";
        container.style.border = "1px solid black";
        container.style.margin = "10px";
        container.style.padding = "10px";
        var textElement = document.createElement('p');
        textElement.textContent = "Hello everyone ☻";
        container.appendChild(textElement);

        var xValueElement = document.createElement('p');
        xValueElement.textContent = `x equals ${x * i}`;
        container.appendChild(xValueElement);

        var inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('id', 'name');
        container.appendChild(inputElement);

        var textElement2 = document.createElement('p');
        textElement2.textContent = "Hello everyone ☻";
        container.appendChild(textElement2);

        var inputElement2 = document.createElement('input');
        inputElement2.setAttribute('type', 'reset');
        inputElement2.setAttribute('value', 'sent');
        container.appendChild(inputElement2);
        inputElement2.onclick(alert("thank youuuu"))



        inputElement.addEventListener('input', function(event) {
            textElement2.textContent = event.target.value;
        });

      

        document.body.appendChild(container);
    }
});
