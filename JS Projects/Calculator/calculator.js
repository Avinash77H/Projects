let currentInput = "";

let display = document.getElementById("calculate");

function cal(para){
    currentInput += para;
    display.innerHTML = currentInput;
};

function clearData(){
    currentInput = "";
    display.innerHTML = "";
}

function del(){
    currentInput = currentInput.slice(0,-1);
    display.innerHTML = currentInput;
}

function calResult(){
    try{
        currentInput = eval(currentInput);
        display.innerHTML = currentInput;
    }
    catch(e){
        display.innerHTML = "Error";
    }
}


