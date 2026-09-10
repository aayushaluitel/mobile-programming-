function math(type) {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let result;
    
    if (type == "sub") {
        result = number1 - number2;
    }
    if (type == "add") {
        result = number1 + number2;
    }
    if (type == "mul") {
        result = number1 * number2;
    }
    if (type == "div") {
        result = number1 / number2;
    }
    document.getElementById("result").innerHTML = result;
}

   
