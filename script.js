
const num1 = + prompt("enter first no");

const operators = prompt("add operators");

const num2 = + prompt("enter second no)");

let result;

if (operators === "+"){

    result = num1 +num2;

}else if(operators === "-"){

    result = num1 - num2;

}else if(operators === "*"){

    result = num1 * num2;

}else if (operators === "/"){

    result = num1 / num2;

}else if (operators === "%"){

    result = num1 % num2;

}else {
    
    result = "wrong option"

}