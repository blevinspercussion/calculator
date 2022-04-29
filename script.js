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
let operator = '';
let total = 0;
let displayClear = false;

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
        case 'x':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    };
};
/////////////////////////////
//   Event Listeners
/////////////////////////////

// Event listeners for number buttons
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent === '0' || displayClear === true) {
            displayClear = false;
            display.textContent = '';
        }
        if (operator !== '') {
            operate(operator, total, parseInt(display.textContent));
        }
        display.textContent += button.textContent;
        displayValue = parseInt(display.textContent);
    });
});


opButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (total === 0) {
            total = parseInt(display.textContent);;
            operator = button.textContent;
            console.log(total, operator);
            displayClear = true;
        } else {
            total = operate(operator, total, parseInt(display.textContent));
            operator = button.textContent;
            display.textContent = total;
            displayClear = true;
        }
        display
    });
});

// Event listener for clear button
clearButton.addEventListener('click', () => {
    total = 0;
    displayValue = 0;
    num1 = 0;
    display.textContent = displayValue;
});

// Event listener for enter button
enterButton.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '0';
    } else {
        total = operate(operator, total, parseInt(display.textContent));
        display.textContent = total;
        operator = '';
        displayClear = true;
        // total = 0;
    };
});