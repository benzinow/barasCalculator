//math: [];
//click on number: add it to an array: math as string
//click on operator: add it to an array: math as string
// "+", "-", "/", "*"

//array holds all of the inputted/symbols
var math = [];

function onClickNumber(number) {
  if (math.length > 0) {
    if (math[math.length - 1].type === "result") {
      onClickClear();
    }
  }

  if (math.length > 0) {
    if (math[math.length - 1].type === "number") {
      if (math[math.length - 1].value === "0" && number === "0") {
        return;
      }

      math[math.length - 1].value = math[math.length - 1].value + number;
      displayMath();
      return;
    }
  }
  let obj = {
    type: "number",
    value: number,
  };
  math.push(obj);
  displayMath();
}

function onClickDot() {
  if (math.length === 0) {
    let obj = {
      type: "number",
      value: "0.",
    };
    math.push(obj);
    displayMath();
  } else {
    if (math[math.length - 1].type === "operator") {
      let obj = {
        type: "number",
        value: "0.",
      };
      math.push(obj);
      displayMath();
    } else if (math[math.length - 1].type === "result") {
      onClickClear();
    } else if (math[math.length - 1].type === "number") {
      if (math[math.length - 1].value.includes(".")) {
        return;
      }
      math[math.length - 1].value = math[math.length - 1].value + ".";
      displayMath();
    }
  }
}

function onClickOperator(operator) {
  if (math.length === 0) {
    return;
  }

  if (math[math.length - 1].type === "operator") {
    math[math.length - 1].value = operator;
    displayMath();
    return;
  }

  let obj = {
    type: "operator",
    value: operator,
  };
  math.push(obj);
  displayMath();
}

function onClickEquals() {
  //loop through math array

  //check to see if this is an operator
  for (let index = 0; index < math.length; index++) {
    let valueObj = math[index];
    if (valueObj.type === "operator") {
      //value = Operator
      let prevValueObj = math[index - 1];
      let nextValueObj = math[index + 1];
      //else {
      //number = Number
      //}

      //parse them as numbers
      let prevValue = parseFloat(prevValueObj.value);
      let nextValue = parseFloat(nextValueObj.value);

      if (valueObj.value === "/" && nextValue === 0) {
        displayCustomText("The Narwhal Bacons at Midnight");
        return;
      }
      //set the default result to 0
      let result = 0;

      //check what the operator value is set to
      switch (valueObj.value) {
        //do the operation
        case "/": {
          result = prevValue / nextValue;
          break;
        }
        case "*": {
          result = prevValue * nextValue;
          break;
        }
        case "+": {
          result = prevValue + nextValue;
          break;
        }
        case "-": {
          result = prevValue - nextValue;
          break;
        }
        default: {
          //do nothing
        }
      }

      //display the result
      document.getElementById("calculation").innerHTML = result;
      math = [];

      let obj = {
        type: "result",
        value: result,
      };
      math.push(obj);

      displayMath();
    }
  }
}

function displayMath() {
  //math -["1", "2". "+" "3"];
  //        0    1    2   3
  let displayString = "";
  for (let index = 0; index < math.length; index++) {
    if (math[index].type === "number" || math[index].type === "result") {
      displayString += commaNumber(math[index].value);
    } else {
      displayString += math[index].value;
    }
  }

  document.getElementById("calculation").innerHTML = displayString;
  //index = 0 (0 < 4)
  //index = 0 (1 < 4)
  //index = 0 (2 < 4)
  //index = 0 (3 < 4)
  //index = 0 (4 < 4) - stops
}

function displayCustomText(text) {
  document.getElementById("calculation").innerHTML = text;
}
//clear the entire display
function onClickClear() {
  math = [];
  displayMath();
}
//clea the last item on display
function onClickDelete() {
  //do something to math array to delete last number
  math.pop();
  //update the display
  displayMath();
}

//test branch comment

///always use === and !==
