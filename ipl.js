let button=document.getElementById('add')
let todolist=document.getElementById('todolist')
let input=documnet.getElementById('input');

let todos=[];
//now button pana ena aguthunu entha page ku poguthunu
button.addEventListener('click',()=>{
    todos.push(input.value)
    addtodo(input.value)
    input.value=''
})
function addtodo(todo){
    let para=document.createElement('p')
    parseFloat.innerText=todo;
    todolist.appendChild(para)
    para.addEventListener('click',()=>{
        //epo box la type pana athu already panito nu kamikurathukag etha use panro like strickouting mari
        para.style.textDecoration='line-through'
    })
}
