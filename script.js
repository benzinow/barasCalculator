//math: [];
//click on number: add it to an array: math as string
//click on operator: add it to an array: math as string
// "+", "-", "/", "*"

var math = [];

function onClickNumber(number) {
    math.push(number);
    displayMath();
}

function onClickOperator(operator) {
    math.push(operator);
    displayMath();
}

function onClickEquals() {
    //loop through math array
    //if we find a number, we call parseInt
    //if we find an operator, we

    for (let index = 0; index < math.length; index++) {
        let value = math[index];
        let number = parseInt(value);
        if (isNaN(number) == true) {
            //value = Operator
            let prevValueString = math[index - 1];
            let nextValueString = math[index + 1];
            //else {
            //number = Number
            //}

            //parse them as numbers
            let prevValue = parseInt(prevValueString);
            let nextValue = parseInt(nextValueString);

            //set the default result to 0
            let result = 0;

            //check what the operator value is set to
            switch (value) {
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
            math.push(result);
        }
    }
}

function displayMath() {
    //math -["1", "2". "+" "3"];
    //        0    1    2   3
    let displayString = "";
    for (let index = 0; index < math.length; index++) {
        displayString += math[index];
    }

    document.getElementById("calculation").innerHTML = displayString;
    //index = 0 (0 < 4)
    //index = 0 (1 < 4)
    //index = 0 (2 < 4)
    //index = 0 (3 < 4)
    //index = 0 (4 < 4) - stops
}

function onClickClear() {
    math = [];
    displayMath();
}
