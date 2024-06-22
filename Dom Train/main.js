document.addEventListener("DOMContentLoaded", function() {
    x= prompt("good day");
    alert(`x = ${x-5}`);
    const element = document.createElement('p');
    element.textContent = "Hello sofien";
    const element2 = document.createElement('p');
    element2.textContent = `x equal to ${x*100}`;
    document.body.appendChild(element2);
    const element1 = document.createElement('p');
    element1.textContent = "Hello everyone ☻";
    document.body.appendChild(element);
    document.body.appendChild(element1);
    const element3 = document.createElement('input');
    element3.setAttribute('type', 'text','id','name');
    document.body.appendChild(element3);
    setTimeout(element3, 0);

});
