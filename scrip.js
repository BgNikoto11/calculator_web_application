function display(buttonValue){
    document.getElementById("calculator-display").value += buttonValue;
}
function displayKeyboard(event){
    if(event.key == '1' || event.key == '2'
    || event.key == '3' || event.key == '4'
    || event.key == '5' || event.key == '6'
    || event.key == '7' || event.key == '8'
    || event.key == '9' || event.key == '+'
    || event.key == '-' || event.key == '/'
    || event.key == '*' || event.key == '.')
    document.getElementById("calculator-display").value += event.key;

}

function solve(){
    let x = document.getElementById("calculator-display").value;
    let y = math.evaluate(x);
    document.getElementById("calculator-display").value = y;
}

function clearAll(){
    document.getElementById("calculator-display").value = "";
}

function deleteOne(){
let x = document.getElementById("calculator-display").value;
let y = x.slice(0, -1);
document.getElementById("calculator-display").value = y;
}

document.onkeydown = function(event){
    if (event.key === "Enter"){
        console.log("Enter"); 
        event.preventDefault();
        solve(); 
    }
    else if(event.key === "Backspace"){
        console.log("Backspace");
        deleteOne();
    }
}