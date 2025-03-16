let firstValue = '';
let secondValue = '';
let selectedOperator = '';
let shouldResetScreen = false; // clear flag

function enterDigit(num) {
    if (shouldResetScreen) {
        secondValue = '';
        shouldResetScreen = false;
    }
    secondValue += num;
    updateScreen();
}

function enterDecimal() {
    if (shouldResetScreen) {
        secondValue = '0.';
        shouldResetScreen = false;
    } else if (!secondValue.includes('.')) {
        secondValue += secondValue ? '.' : '0.';
    }
    updateScreen();
}

function chooseOperator(operator) {
    if (secondValue === '') return;
    if (firstValue !== '') {
        computeResult();
    }
    selectedOperator = operator;
    firstValue = secondValue;
    secondValue = '';
    updateScreen();
}

function computeResult() {
    if (firstValue === '' || secondValue === '' || selectedOperator === '') return;

    let num1 = parseFloat(firstValue);
    let num2 = parseFloat(secondValue);
    let result;

    switch (selectedOperator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': 
            if (num2 === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = num1 / num2; 
            break;
        default: return;
    }

    secondValue = result.toString();
    firstValue = '';
    selectedOperator = '';
    shouldResetScreen = true;
    updateScreen();
}

function backspace() {
    if (shouldResetScreen) return;
    secondValue = secondValue.slice(0, -1);
    updateScreen();
}

function clearScreen() {
    firstValue = '';
    secondValue = '';
    selectedOperator = '';
    shouldResetScreen = false;
    updateScreen();
}

function updateScreen() {
    document.getElementById('screen').value = firstValue + ' ' + selectedOperator + ' ' + secondValue;
}
