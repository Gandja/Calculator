function plus() {
    let num1, num2, result;
    num1 = document.getElementById("number1").value;
    num1 = parseFloat(num1);
    num2 = document.getElementById("number2").value;
    num2 = parseFloat(num2);
    result = num1 + num2;
    if (!isFinite(result)) {
        document.getElementById("out").innerHTML = "Учи математику";
    } else {
        document.getElementById("out").innerHTML = result.toFixed(2);
    }
}

function minus() {
    let num1, num2, result;
    num1 = document.getElementById("number1").value;
    num1 = parseFloat(num1);
    num2 = document.getElementById("number2").value;
    num2 = parseFloat(num2);
    result = num1 - num2;
    if (!isFinite(result)) {
        document.getElementById("out").innerHTML = "Учи математику";
    } else {
        document.getElementById("out").innerHTML = result.toFixed(2);
    }
}

function divide() {
    let num1, num2, result;
    num1 = document.getElementById("number1").value;
    num1 = parseFloat(num1);
    num2 = document.getElementById("number2").value;
    num2 = parseFloat(num2);
    result = num1 / num2;
    if (!isFinite(result)) {
        document.getElementById("out").innerHTML = "Учи математику";
    } else {
        document.getElementById("out").innerHTML = result.toFixed(2);
    }
}

function multiply() {
    let num1, num2, result;
    num1 = document.getElementById("number1").value;
    num1 = parseFloat(num1);
    num2 = document.getElementById("number2").value;
    num2 = parseFloat(num2);
    result = num1 * num2;
    if (!isFinite(result)) {
        document.getElementById("out").innerHTML = "Учи математику";
    } else {
        document.getElementById("out").innerHTML = result.toFixed(2);
    }
}