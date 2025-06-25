const calculator = document.querySelector(".calculator");

const display = document.createElement("div");
display.setAttribute("class", "display");
calculator.appendChild(display);

const numbers = document.createElement("div");
numbers.setAttribute("class", "numbers");
calculator.appendChild(numbers);

const operators = document.createElement("div");
operators.setAttribute("class", "operators");
calculator.appendChild(operators);