const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const operation = document.getElementById('operation');
const result = document.getElementById('result');

function calculator() {

    if (operation.value === "+") {
        result.value = parseFloat(number1.value) + parseInt(number2.value)
    } else if (operation.value === "-") {
        result.value = parseFloat(number1.value) - parseInt(number2.value)
    } else if (operation.value === "*") {
        result.value = parseFloat(number1.value) * parseInt(number2.value)
    } else {
        result.value = parseFloat(number1.value) / parseInt(number2.value)
    }
}