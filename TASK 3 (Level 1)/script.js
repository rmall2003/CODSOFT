function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function calculate() {
    const displayValue = document.getElementById('display').value;
    const result = eval(displayValue);
    document.getElementById('display').value = result;
}
function resetcalculator() {
    document.getElementById('display').value = '';
}
function deletelatestinput() {
    var display = document.getElementById('display');
    var currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
    }
}