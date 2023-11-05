//Arrays

/*I feel like there's a more condensed/efficient way 
to do all these selectors and event listeners, 
but it escapes me for the moment.*/
//Selectors
const testKey = document.getElementById("test");
const display = document.getElementById("display")
const clearBtn = document.getElementById("key-clear-entry");
const clearAllBtn = document.getElementById("key-clear-all");
const backspaceBtn = document.getElementById("key-backspace");

const num0 = document.getElementById("data0");
const num1 = document.getElementById("data1");
const num2 = document.getElementById("data2");
const num3 = document.getElementById("data3");
const num4 = document.getElementById("data4");
const num5 = document.getElementById("data5");
const num6 = document.getElementById("data6");
const num7 = document.getElementById("data7");
const num8 = document.getElementById("data8");
const num9 = document.getElementById("data9");
const period = document.getElementById("dataPeriod");

const operatorAdd = document.getElementById("operatorAdd")
const operatorSubtract = document.getElementById("operatorSubtract")
const operatorMultiply = document.getElementById("operatorMultiply")
const operatorDivide = document.getElementById("operatorDivide")
const equalsBtn = document.getElementById("calculate")
//Event Listeners
num0.addEventListener("click", inputNum)
num1.addEventListener("click", inputNum)
num2.addEventListener("click", inputNum)
num3.addEventListener("click", inputNum)
num4.addEventListener("click", inputNum)
num5.addEventListener("click", inputNum)
num6.addEventListener("click", inputNum)
num7.addEventListener("click", inputNum)
num8.addEventListener("click", inputNum)
num9.addEventListener("click", inputNum)
period.addEventListener("click", inputNum)

operatorAdd.addEventListener("click", operandNum)
operatorSubtract.addEventListener("click", operandNum)
operatorMultiply.addEventListener("click", operandNum)
operatorDivide.addEventListener("click", operandNum)

clearBtn.addEventListener("click", clearEntry)
clearAllBtn.addEventListener("click", clearAll)
backspaceBtn.addEventListener("click", backspace)
equalsBtn.addEventListener("click", calculate)

//Functions




// Calculator Challenge:
// function calculator(num1, num2, operator){
//     if (operator == "+"){
//         return console.log(num1+num2)
//     } else if (operator == "-"){
//         return console.log(num1-num2)
//     } else if (operator == "*"){
//         return console.log(num1*num2)
//     } else if (operator == "/"){
//         return console.log(num1/num2)
//     } else {
//         return console.log("ERROR: Not a recognized operator")
//     }
//     switch (operator) {
//         case "+":
//             console.log(num1+num2);
//             break;
//         case "-":
//             console.log(num1-num2);
//             break;
//         case "*":
//             console.log(num1*num2);
//             break;
//         case "/":
//             console.log(num1/num2);
//             break;
//         default:
//             console.log("ERROR: Not a recognized operator");
//     }
// }
// calculator(5, 2, "+")