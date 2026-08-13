
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
        if (display.textContent === '0'){
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
        
    })
})


const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = 0;
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
});


