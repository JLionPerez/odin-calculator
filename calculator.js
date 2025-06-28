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

let setDisplay = () => {
    const buttons = document.querySelectorAll("button");
    for (let button of buttons) {
        button.addEventListener('click', (event) => {
            document.querySelector(".display").textContent += button.textContent
        })
    }
}

let operate = () => {

    setDisplay()

    let firstNum;
    let operator;
    let secondNum = null;
    let result;

    const display = document.querySelector(".display")
    const equalBtn = document.querySelector("#buttonEql")
    const clearBtn = document.querySelector("#buttonClear")
    const addBtn = document.querySelector("#buttonAdd")
    const subBtn = document.querySelector("#buttonSub")
    const multBtn = document.querySelector("#buttonMul")
    const divBtn = document.querySelector("#buttonDiv")

    addBtn.addEventListener('click', (event) => {
        firstNum = display.textContent.substring(0, display.textContent.indexOf('+'))
        operator = '+'
        document.querySelector(".display").textContent = ""
    })

    subBtn.addEventListener('click', (event) => {
        firstNum = display.textContent.substring(0, display.textContent.indexOf('-'))
        operator = '-'
        document.querySelector(".display").textContent = ""
    })

    multBtn.addEventListener('click', (event) => {
        firstNum = display.textContent.substring(0, display.textContent.indexOf('*'))
        operator = '*'
        document.querySelector(".display").textContent = ""
    })

    divBtn.addEventListener('click', (event) => {
        firstNum = display.textContent.substring(0, display.textContent.indexOf('/'))
        operator = '/'
        document.querySelector(".display").textContent = ""
    })

    clearBtn.addEventListener('click', (event) => {
        document.querySelector(".display").textContent = ""
    })

    equalBtn.addEventListener('click', (event) => {
        secondNum = display.textContent.substring(0, display.textContent.length - 1)

        if (operator === '+') {
            result = add(parseInt(firstNum), parseInt(secondNum))
            result = Math.round(result)
            firstNum = result
            secondNum = null
        }

        if (operator === '-') {
            result = subtract(parseInt(firstNum), parseInt(secondNum))
            result = Math.round(result)
            firstNum = result
            secondNum = null
        }

        if (operator === '*') {
            result = multiply(parseInt(firstNum), parseInt(secondNum))
            result = Math.round(result)
            firstNum = result
            secondNum = null
        }

        if (operator === '/') {
            if (secondNum == 0) {
                result = "(-_-) shame"
            } else {
                result = divide(parseInt(firstNum), parseInt(secondNum))
                result = Math.round(result)
                firstNum = result
            }
            secondNum = null
        }
        document.querySelector(".display").textContent = result
    })
}

operate()