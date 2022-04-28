// Element selectors
const display = document.querySelector('.display');
const numButtons = document.querySelectorAll('.num-button');
const opButtons = document.querySelectorAll('.op-button');
const clearButton = document.querySelector('.clear-button');
const enterButton = document.querySelector('.enter-button');


// Initialize Variables
let displayValue = '0';
let num1 = 0;
let num2 = 0;

// Initialize display
display.textContent = displayValue;



// Math functions

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return multiply(num1, num2);
            break;
    };
};
/////////////////////////////
//   Event Listeners
/////////////////////////////

// Add event listeners to number buttons
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent === '0') {
            display.textContent = '';
        }
        display.textContent += button.textContent;
        displayValue = parseInt(display.textContent);
    });
});

opButtons.forEach(button => {
    button.addEventListener('click', () => {

    });
});

clearButton.addEventListener('click', () => {
    displayValue = 0;
    display.textContent = displayValue;
});