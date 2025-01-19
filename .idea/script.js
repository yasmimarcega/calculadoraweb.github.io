const resultField = document.getElementById('result');

function appendNumber(number) {
    resultField.value += number;
}

function appendOperator(operator) {
    const lastChar = resultField.value.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        resultField.value = resultField.value.slice(0, -1) + operator;
    } else {
        resultField.value += operator;
    }
}

function clearDisplay() {
    resultField.value = '';
}

function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}

function calculateResult() {
    try {
        resultField.value = eval(resultField.value) || '';
    } catch {
        resultField.value = 'Erro';
    }
}
