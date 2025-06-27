/* ----------------------------------- HTML Setup -----------------------------------*/
// const calculator = document.querySelector(".calculator");

// const display = document.createElement("div");
// display.setAttribute("class", "display");
// calculator.appendChild(display);

// const buttons = document.createElement("divs");
// buttons.setAttribute("class", "buttons");

// let populateButtons = (buttons) => {
//     let textArr =[
//         1,2,3,'+',
//         4,5,6,'-',
//         7,8,9,'*',
//         'C',0,'=','/'
//     ]

//     let i = 0;
//     for (let child of buttons.children) {
//         for (let grandchild of child.children) {
//             grandchild.textContent = textArr[i]
//             i++;
//         }
//     }
// }

// let createButtons = (length) => {
//     for (let i = 0; i < length; i++) {
//         const row = document.createElement("div")
//         row.setAttribute("class", "row")
//         for (let j = 0; j < length; j++) {
//             const button = document.createElement("button")
//             row.appendChild(button)
//         }
//         buttons.appendChild(row)
//         populateButtons(buttons)
//     }
//     calculator.appendChild(buttons)
// }

// createButtons(4);

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

// let displayInput = (obj) => {
//     obj.addEventListener("click", (event) => {
//         display.textContent = obj.textContent
//         // calculator.appendChild(display);
//     })
// }

// button.addEventListener("click", (event) => {
//     display.textContent = button.textContent
//     // calculator.appendChild(display);
// })

// let displayInput = (obj) => {
//     obj.addEventListener('click', (event) => {
//         document.querySelector(".display").textContent = obj.textContent
//     })
// }

let setDisplay = () => {
    const buttons = document.querySelectorAll("button");
    for (let button of buttons) {
        button.addEventListener('click', (event) => {
            document.querySelector(".display").textContent += button.textContent
        })
    }
}

// setDisplay() already has text in display so get that to use in operate function
// get your first number and operator and second number
let operate = () => {
    setDisplay()

    const display = document.querySelector(".display")
    // console.log(display.textContent)
    const equalBtn = document.querySelector("#buttonEql")
    // console.log(displayStr)

    equalBtn.addEventListener('click', (event) => {
        let firstNum;
        let secondNum;
        let result;
        // console.log(display.textContent)
        if (display.textContent.includes('+')) {
            firstNum = display.textContent.substring(0, display.textContent.indexOf('+'))
            firstNum = parseInt(firstNum)
            secondNum = display.textContent.substring(display.textContent.indexOf('+') + 1, display.textContent.length - 1)
            secondNum = parseInt(secondNum)
            result = (add(firstNum, secondNum)).toString()
        }
        if (display.textContent.includes('-')) {
            firstNum = display.textContent.substring(0, display.textContent.indexOf('-'))
            firstNum = parseInt(firstNum)
            secondNum = display.textContent.substring(display.textContent.indexOf('-') + 1, display.textContent.length - 1)
            secondNum = parseInt(secondNum)
            result = (subtract(firstNum, secondNum)).toString()
        }
        if (display.textContent.includes('*')) {
            firstNum = display.textContent.substring(0, display.textContent.indexOf('*'))
            firstNum = parseInt(firstNum)
            secondNum = display.textContent.substring(display.textContent.indexOf('*') + 1, display.textContent.length - 1)
            secondNum = parseInt(secondNum)
            result = (multiply(firstNum, secondNum)).toString()
        }
        if (display.textContent.includes('/')) {
            firstNum = display.textContent.substring(0, display.textContent.indexOf('/'))
            firstNum = parseInt(firstNum)
            secondNum = display.textContent.substring(display.textContent.indexOf('/') + 1, display.textContent.length - 1)
            secondNum = parseInt(secondNum)
            result = (divide(firstNum, secondNum)).toString()
        }
        firstNum = result;
        document.querySelector(".display").textContent = result
    })
}

operate()