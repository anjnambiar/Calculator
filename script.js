
var numClicked = 0;
var operator = null;
var isOperatorClicked = false;

//disable all the operators on load
function disableAllOperators() {
    disableOperators();
    document.getElementById("calcId").disabled = true;
}


//get the numbers pressed
function getNumber(event) {
    if(event.innerText == 1) {
        numClicked =  document.getElementById("cell1").innerText;
    }
    else if(event.innerText == 2) {
        numClicked =  document.getElementById("cell2").innerText;
    }
    else if(event.innerText == 3) {
        numClicked =  document.getElementById("cell3").innerText;
    }
    else if(event.innerText == 4) {
        numClicked =  document.getElementById("cell4").innerText;
    }
    else if(event.innerText == 5) {
        numClicked =  document.getElementById("cell5").innerText;
    }
    else if(event.innerText == 6) {
        numClicked =  document.getElementById("cell6").innerText;
    }
    else if(event.innerText == 7) {
        numClicked =  document.getElementById("cell7").innerText;
    }
    else if(event.innerText == 8) {
        numClicked =  document.getElementById("cell8").innerText;
    }
    else if(event.innerText == 9) {
        numClicked =  document.getElementById("cell9").innerText;
    }
    else if(event.innerText == 0) {
        numClicked =  document.getElementById("cell0").innerText;
    }
    displayInput();
}


//find which operator is pressed
function getOperator(event) {
    operator = event.innerText;
    if(operator == "+") {
        highlightOperator("+");
    }
    else if(operator == "-") {
        highlightOperator("-");
    }
    else if(operator == "*") {
        highlightOperator("*");
    }
    else if(operator == "/") {
        highlightOperator("/");
    }
    disableOperators();
}


//function to display input in the textareas
function displayInput() {
    if(numClicked != null || numClicked >= 0 || numClicked <= 9 ) {
        if(!isOperatorClicked) {
            numClicked = document.getElementById("calcInput1").innerHTML  + numClicked;
            document.getElementById("calcInput1").innerText = numClicked;
            numClicked = 0;
            document.getElementById("cellAdd").disabled = false;
            document.getElementById("cellMinus").disabled = false;
            document.getElementById("cellMultiply").disabled = false;
            document.getElementById("cellDivide").disabled = false;
        } else {
            numClicked = document.getElementById("calcInput2").innerHTML  + numClicked;
            document.getElementById("calcInput2").innerHTML = numClicked;
            numClicked = 0;
            document.getElementById("calcId").disabled = false;
        }
    }
}


//function to perform the calculations
function calc() {
    const input1 = document.getElementById('calcInput1').value;
    const input2 = document.getElementById('calcInput2').value;
    if(operator == '+') {
        document.getElementById('calcOutput').innerText = parseInt(input1) + parseInt(input2) ;
    } else if(operator == '-') {
        document.getElementById('calcOutput').innerText = parseInt(input1) - parseInt(input2) ;
    } else if(operator == '*') {
        document.getElementById('calcOutput').innerText = parseInt(input1) * parseInt(input2) ;
    } else if(operator == '/') {
        document.getElementById('calcOutput').innerText = parseInt(input1) / parseInt(input2) ;
    }
    clearOperatorHighlight();
    disableButtons();
    isOperatorClicked = false;
}


//function on pressing clear button
function clearTextArea(event) {
    document.getElementById("calcInput1").innerHTML = "";
    document.getElementById("calcInput2").innerHTML = "";
    document.getElementById("calcOutput").innerHTML = "";
    clearOperatorHighlight();
    enableButtons();
    isOperatorClicked = false;
    disableAllOperators() ;
}


//function to highlight the operator pressed
function highlightOperator(operator) {
    isOperatorClicked = true;
    if(operator == "+") {
        document.getElementById("cellAdd").style.borderColor = '#FAAAAA';
        document.getElementById("cellMinus").style.borderColor = '';
        document.getElementById("cellMultiply").style.borderColor = '';
        document.getElementById("cellDivide").style.borderColor = '';
    }
    else if(operator == "-") {
        document.getElementById("cellAdd").style.borderColor = '';
        document.getElementById("cellMinus").style.borderColor = '#FAAAAA';
        document.getElementById("cellMultiply").style.borderColor = '';
        document.getElementById("cellDivide").style.borderColor = '';
    }
    else if(operator == "*") {
        document.getElementById("cellAdd").style.borderColor = '';
        document.getElementById("cellMinus").style.borderColor = '';
        document.getElementById("cellMultiply").style.borderColor = '#FAAAAA';
        document.getElementById("cellDivide").style.borderColor = '';
    }
    else if(operator == "/") {
        document.getElementById("cellAdd").style.borderColor = '';
        document.getElementById("cellMinus").style.borderColor = '';
        document.getElementById("cellMultiply").style.borderColor = '';
        document.getElementById("cellDivide").style.borderColor = '#FAAAAA';
    }
}

//function to clear the highlights on all operators
function clearOperatorHighlight() {
    document.getElementById("cellAdd").style.borderColor = "";
    document.getElementById("cellMinus").style.borderColor = '';
    document.getElementById("cellMultiply").style.borderColor = '';
    document.getElementById("cellDivide").style.borderColor = '';
}

//function disable operators
function disableOperators() {
    document.getElementById("cellAdd").disabled = true;
    document.getElementById("cellMinus").disabled = true;
    document.getElementById("cellMultiply").disabled = true;
    document.getElementById("cellDivide").disabled = true;
}

//function to disable all buttons except 'clear' once '=' is pressed
function disableButtons() {
    disableOperators();
    document.getElementById("cell0").disabled = true;
    document.getElementById("cell1").disabled = true;
    document.getElementById("cell2").disabled = true;
    document.getElementById("cell3").disabled = true;
    document.getElementById("cell4").disabled = true;
    document.getElementById("cell5").disabled = true;
    document.getElementById("cell6").disabled = true;
    document.getElementById("cell7").disabled = true;
    document.getElementById("cell8").disabled = true;
    document.getElementById("cell9").disabled = true;
    document.getElementById("calcId").disabled = true;
}

//function to enable all buttons when 'clear' is pressed
function enableButtons() {
    document.getElementById("cellAdd").disabled = false;
    document.getElementById("cellMinus").disabled = false;
    document.getElementById("cellMultiply").disabled = false;
    document.getElementById("cellDivide").disabled = false;
    document.getElementById("cell0").disabled = false;
    document.getElementById("cell1").disabled = false;
    document.getElementById("cell2").disabled = false;
    document.getElementById("cell3").disabled = false;
    document.getElementById("cell4").disabled = false;
    document.getElementById("cell5").disabled = false;
    document.getElementById("cell6").disabled = false;
    document.getElementById("cell7").disabled = false;
    document.getElementById("cell8").disabled = false;
    document.getElementById("cell9").disabled = false;
    document.getElementById("calcId").disabled = false;
}