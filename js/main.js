let btn = document.getElementById("btn");
let first = document.querySelector(".first");
let second = document.querySelector(".second");

console.log(btn);

console.log(first);

console.log(second);


function setBackground() {

    first.setAttribute('class', 'red');

    second.setAttribute('class', 'yellow')
};

btn.addEventListener("click", setBackground);