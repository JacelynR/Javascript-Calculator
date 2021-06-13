const operators = [
                    '+', 
                    '-', 
                    '*', 
                    '/'
                  ];
let lastResult = 0;
let currentCalc = "";

          /** RESETS THE DISPLAYS TO ZERO **/
function clearDisplay() {
  let display = document.getElementById("display");
  let secondDisplay = document.getElementById("secondDisplay");

  lastResult = 0;
  display.innerHTML = 0;
  secondDisplay.innerHTML = lastResult;
}

          /** SHOW INPUTS IN DISPLAY BOXES **/
function updateDisplay(input) {
  let display = document.getElementById("display");
  let secondDisplay = document.getElementById("secondDisplay");

  if (display.innerHTML === "0" && operators.indexOf(input) === -1) {
    //IF FIRST INPUT IS A DECIMAL //
    if (input === "decimal") {
      display.innerHTML = "0.";
    } else if (input === "positive-negative") {
        if (display.innerHTML.indexOf("-1") === -1) {
        display.innerHTML = "-" + display.innerHTML.slice(1, display.innerHTML.length);
        } else if (display.innerHTML.indexOf("-1" > -1)) {
        display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
        }
    } else {
      /** DISPLAY THE NUMBER ENTERED **/
      display.innerHTML = input;  
    }

          /** OPERAND INPUTS **/
  } else if (operators.indexOf(input) >= 0) {
      if (lastResult === display.innerHTML) {
      // When the consecutive operators are entered
      /*** not working properly, will comeback to update this section ***/
      //5 * - 5 = -25
          currentCalc = input;

          /*
          lastResult = display.innerHTML;

          if (currentCalc === operators.indexOf(input) && lastResult === operators.indexOf(input)) {
            if (currentCalc === '-') {
              input = currentCalc.slice(1, currentCalc.length);
              input = "-" + currentCalc; 
            }
            return
              }
         */

      } else if (currentCalc === "") {
        //input = this.operators;
        currentCalc = input;
        lastResult = display.innerHTML;
        secondDisplay.innerHTML = lastResult;
        display.innerHTML = 0;
        
      } else {
        //straight-forward inputs
        lastResult = calculate(lastResult, display.innerHTML, currentCalc);
        secondDisplay.innerHTML = lastResult;
        display.innerHTML = 0;
        currentCalc = input;   
    }

  } else if (input === "equals") {
    display.innerHTML = calculate(lastResult, display.innerHTML, currentCalc);
    lastResult = 0;
    currentCalc= "";
    secondDisplay.innerHTML = lastResult;
  } else if (input === "decimal") {
    if (display.innerHTML.indexOf(".") === -1) {
      display.innerHTML += ".";
    }

  } else if (input === "negative-pos") {
    if (display.innerHTML.indexOf("-1") === -1) {
      display.innerHTML = "-" + display.innerHTML
    } else if (display.innerHTML.indexOf("-1" > -1)) {
      display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
    }
  } else {
    display.innerHTML += input;
  }
}

            /** PERFORMS THE MATH CALCULATIONS **/
function calculate(firstNum, secondNum, operation) {
  let result;
  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);

  switch(operation) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;
    default:
      console.log("Math Error");
  }
  return result;
}
