
function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}


let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let shouldResetDisplay = false;


function operate(operation, num1, num2) {
    if (operation === "+") {
        return add(num1, num2);
    } else if (operation === "-") {
        return subtract(num1, num2);
    } else if (operation === "*") {
        return multiply(num1, num2);
    } else if (operation === "/") {
        return divide(num1, num2);
    }
}

const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.number-btn');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (shouldResetDisplay) {
            display.textContent = button.textContent; 
            shouldResetDisplay = false;               
        } else if (display.textContent === '0'){
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    })
});


const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = 0;
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
});


const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        firstNumber = display.textContent;
        operator = operatorBtn.textContent;
        shouldResetDisplay = true;
    })
});



const equalButton = document.querySelector('#equal');

equalButton.addEventListener('click', () => {
    if (!firstNumber || !operator ) return;

    secondNumber = display.textContent;

    let result = operate(operator, Number(firstNumber), Number(secondNumber));
    display.textContent = result;

    firstNumber = result;
    operator = null;
    shouldResetDisplay = true;
});



