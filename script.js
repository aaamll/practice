//    Calculator logic
let CalculatorInput = document.getElementById("calculatorInput");
let CalculatorInput2 = document.getElementById("calculatorInput2");

function add(num1, num2) {
    return num1 + num2
}
function substract(num1, num2) {
    return num1 - num2
}
function multiple(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
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

//    Todo logic
let input = document.getElementById('input');
let button = document.getElementById('btn');
let Box = document.getElementById('taskBox');

function CreateTask() {
    let taskInput = input.value.trim();
    if (taskInput !== "") {
        let li = document.createElement('li')
        let formateDate = new Date().toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
        Box.appendChild(li);
        li.textContent = `${taskInput}-${formateDate}`;

        input.value = ''
    }
}
