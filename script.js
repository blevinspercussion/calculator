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
let enter = false;

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

numButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('num-button-hover');
    });
});

numButtons.forEach(button => {
    button.addEventListener('mouseleave', () => {
        button.classList.remove('num-button-hover');
    });
});

// Event listeners for operator buttons
opButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (total === 0 || enter === true) {
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

opButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('op-button-hover');
    });
});

opButtons.forEach(button => {
    button.addEventListener('mouseleave', () => {
        button.classList.remove('op-button-hover');
    });
});

// Event listeners for clear button
clearButton.addEventListener('click', () => {
    total = 0;
    displayValue = 0;
    num1 = 0;
    display.textContent = displayValue;
});

clearButton.addEventListener('mouseover', () => {
    clearButton.classList.add('num-button-hover');
});

clearButton.addEventListener('mouseleave', () => {
    clearButton.classList.remove('num-button-hover');
});

// Event listeners for enter button
enterButton.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.textContent = '0';
    } else {
        total = operate(operator, total, parseInt(display.textContent));
        display.textContent = total;
        // operator = '';
        displayClear = true;
        enter = true;
        // total = 0;
    };
});

enterButton.addEventListener('mouseover', () => {
    enterButton.classList.add('num-button-hover');
});

enterButton.addEventListener('mouseleave', () => {
    enterButton.classList.remove('num-button-hover');
});