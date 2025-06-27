/* ----------------------------------- HTML Setup -----------------------------------*/
const calculator = document.querySelector(".calculator");

const display = document.createElement("div");
display.setAttribute("class", "display");
calculator.appendChild(display);

const buttons = document.createElement("divs");
buttons.setAttribute("class", "buttons");

let populateButtons = (buttons) => {
    let textArr =[
        1,2,3,'+',
        4,5,6,'-',
        7,8,9,'*',
        'C',0,'=','/'
    ]

    let i = 0;
    for (let child of buttons.children) {
        for (let grandchild of child.children) {
            grandchild.textContent = textArr[i]
            i++;
        }
    }
}

let createButtons = (length) => {
    for (let i = 0; i < length; i++) {
        const row = document.createElement("div")
        row.setAttribute("class", "row")
        for (let j = 0; j < length; j++) {
            const button = document.createElement("button")
            row.appendChild(button)
        }
        buttons.appendChild(row)
        populateButtons(buttons)
    }
    calculator.appendChild(buttons)
}

createButtons(4);

/* ------------------------------- Operator Functions -------------------------------*/
let add = (x, y) => {
    return x + y
}

let subtract = (x, y) => {
    return x - y
}

let multiply = (x, y) => {
    return x * y
}

let divide = (x, y) => {
    return x / y
}

let displayInput = (obj) => {
    obj.addEventListener("click", (event) => {
        display.textContent = obj.textContent
        calculator.appendChild(display);
    })
}

// displayInput(buttons)

let operate = (first, operator, second) => {
    let result;
    if (operator === '+') {
        result = add(first, second)
    }
    if (operator === ('-')) {
        result = subtract(first, second)
    }
    if (operator === ('*')) {
        result = multiply(first, second)
    }
    if (operator === ('/')) {
        result = divide(first, second)
    }
    if (first === ('=')) { return result }
}

//tests
console.log(operate(7,'+',3))
console.log(operate(7,'-',3))
console.log(operate(7,'*',3))
console.log(operate(21,'/',3))
console.log(operate(21,'+',3,'/'))
// console.log('=')