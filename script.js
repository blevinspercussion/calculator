// Element selectors
display = document.querySelector('.display');
numButtons = document.querySelectorAll('.num-button');


// Initialize display
display.textContent = '0';


let displayValue = 0;


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

// ---------Listeners--------

numButtons.forEach(button => {
    button.addEventListener('click', event => {
        if (display.textContent === '0') {
            display.textContent = '';
        }
        display.textContent += button.textContent;

    });
});