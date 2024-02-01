var calculatorDisplay = document.getElementById("calculator-display");

function display(buttonValue) {
    calculatorDisplay.value += buttonValue;
}

function displayKeyboard(event) {
    if (event.key == '1' || event.key == '2'
        || event.key == '3' || event.key == '4'
        || event.key == '5' || event.key == '6'
        || event.key == '7' || event.key == '8'
        || event.key == '9' || event.key == '+'
        || event.key == '-' || event.key == '/'
        || event.key == '*' || event.key == '.') {
        calculatorDisplay.value += event.key;
    }
}
document.addEventListener('keydown', displayKeyboard);

function solve() {
    let oldValue = calculatorDisplay.value;
    let newValue = math.evaluate(oldValue);
    calculatorDisplay.value = newValue;
}

function clearAll() {
    calculatorDisplay.value = "";
}

function deleteOne() {
    let oldValue = calculatorDisplay.value;
    let newValue = oldValue.slice(0, -1);
    calculatorDisplay.value = newValue;
}

document.onkeydown = function (event) {
    if (event.key === "Enter") {
        console.log("Enter");
        event.preventDefault();
        solve();
    } else if (event.key === "Backspace") {
        console.log("Backspace");
        deleteOne();
    }
}
