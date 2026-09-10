function sum(){
    let number1= Number(document.getElementById("number1").value);
    let number2= Number(document.getElementById("number2").value);
    let number3= Number(document.getElementById("number3").value);
    let number4= Number(document.getElementById("number4").value);
    let number5= Number(document.getElementById("number5").value);
    let number6= Number(document.getElementById("number6").value);
    let number7= Number(document.getElementById("number7").value);
    let number8= Number(document.getElementById("number8").value);

    if (number1>100 || number1<0||
        number2>100 || number2<0||
        number3>100 || number3<0||
        number4>100 || number4<0||                                    
        number5>100 || number5<0||
        number6>100 || number6<0||
        number7>100 || number7<0||    
        number8>100 || number8<0
    )
    {
        document.getElementById("result").innerHTML = "Please enter valid marks (0-100) for all subjects.";
        document.getElementById("result").style.color = "red";
        return;
    }

    let result = number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8;  
    if (result >=600 ){
        document.getElementById("result").innerHTML = result + "Passed";
        document.getElementById("result").style.color = "green";

    }   
    else if (result >= 500){
        document.getElementById("result").innerHTML = result + " first divisio";
    }
    else if (result >= 400){
        document.getElementById("result").innerHTML = result + " second division";

    }   
    else{
        document.getElementById("result").innerHTML = result + " failed";
        document.getElementById("result").style.color = "red";
    }        
     
}