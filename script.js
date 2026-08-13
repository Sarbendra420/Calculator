
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
    if ( b === 0){
        return "Nice Try!";
    } else {
        return a / b;
    }
    
}


let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let shouldResetDisplay = false;


function operate(operation, num1, num2) {

    let result;

    if (operation === "+") {
        result = add(num1, num2);
    } else if (operation === "-") {
        result = subtract(num1, num2);
    } else if (operation === "*") {
        result = multiply(num1, num2);
    } else if (operation === "/") {
        result = divide(num1, num2);
    }

    if (typeof result === "number") {
        return Math.round(result * 10000) / 10000;
    }

    return result;
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

        if (firstNumber && operator && !shouldResetDisplay) {
            secondNumber = display.textContent;
            let result = operate(operator, Number(firstNumber), Number(secondNumber));
            display.textContent = result;
            firstNumber = result;
        } else {
            firstNumber = display.textContent;
        }
        
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


const decimalButton = document.querySelector('#decimal');

decimalButton.addEventListener('click', () => {
    if (shouldResetDisplay){
        display.textContent = '0.';
        shouldResetDisplay = false;
    } else if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
});


const backSpaceBtn = document.querySelector('#backspace');

backSpaceBtn.addEventListener('click', () => {
    if (shouldResetDisplay) return;

    let newDisplay = display.textContent.slice(0, -1);

    if (newDisplay === "") {
        display.textContent = "0";
    } else {
        display.textContent = newDisplay;
    }
});
