//    Calculator logic
let CalculatorInput = document.getElementById("calculatorInput");
let CalculatorInput2 = document.getElementById("calculatorInput2");
let resultList = document.getElementById("resultList");

function CalculationLogic(op){
    let n1=Number(CalculatorInput.value);
    let n2=Number(CalculatorInput2.value);
    let result;

    if(op === '+') result = n1+n2;
    if(op === '-') result = n1-n2;
    if(op === '*') result = n1*n2;
    if(op === '/') result = n1/n2;

    let li=document.createElement('li');
    li.textContent = ` ${result}`
    resultList.appendChild(li)
}

// Tab logic
let TabContent = document.getElementsByClassName("tabcontent");
let Tablinks = document.getElementsByClassName("Tablinks");

function Tabs(evt, tabName) {
    for (let i = 0; i < TabContent.length; i++) {
        TabContent[i].style.display = "none"

    }
    for (let i = 0; i < Tablinks.length; i++) {
        Tablinks[i].className = Tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
