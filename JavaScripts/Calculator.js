let calValue = '';
const resultBox = document.getElementById('Result');
function calculationUpdate(value) {
    calValue = calValue + value;
    resultBox.innerHTML = calValue;
}

function calculate() {
    calValue = eval(calValue);
    resultBox.innerHTML = calValue;
}

function clearValue() {
    calValue = '';
    resultBox.innerHTML = calValue;
}