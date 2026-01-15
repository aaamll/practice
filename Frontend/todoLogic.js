//    Todo logic
let input = document.getElementById('input');
let button = document.getElementById('btn');
let Box = document.getElementById('taskBox');
let todos = [];

function render() {
    Box.innerHTML = todos.map(
        t => `${t.text}
        <button onClick="deleteTodo(${t.id})">delete</button>
        <button onClick="editTodo(${t.id})">edit</button> `
    ).join('')
}

function CreateTask() {
    let taskInput = input.value.trim();
    if (!taskInput) return;
    todos.push(
        {
            id: Date.now(),
            text: `${taskInput}-${new Date().toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}`
        }
    )
    input.value = ''
    render()
}

function deleteTodo(id) {
     todos = todos.filter(t => t.id !== id);
    render()
}
function editTodo(id) {
    let newTask = prompt('enter new task');
    if (!newTask) return;
      todos = todos.map(
        t => t.id === id ? { ...t, text: `${newTask}+${Date.now()}` } : t
    );
    render()
}
// function CreateTask() {
//     let taskInput = input.value.trim();
//     if (taskInput !== "") {
//         let li = document.createElement('li')
//         let formateDate = new Date().toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
//         Box.appendChild(li);
//         li.textContent = `${taskInput}-${formateDate}`;
//         input.value = ''
//     }
// }
// we have three elements ( input, button,ul div). Data flow is like :Input(data typed in input) -> process(starts when button clicks and execute CreateTask func) -> Output(input text renders on UI through methods like appendchild and input field becomes empty again)

// FIRST  LOGIC : input cleans by trim() -> condition runs if input value is not empty -> create li -> append li with ul -> make li context equal to input's value -> empty the input field 

// SECOND LOGIC : create empty array as todos = create render func in which declare box as todos then map it along with hide buttons = include join('') with map =  the in createTask func first 2 steps same then push date and dynamic text in todos. = empty values and call render = delete func usin filter and call render = edit func with a prompt = then apply condition on prompt by mapping todos = use spreat operator  in map.
