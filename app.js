const listValue = document.querySelector('.todoValue');
const todoList = document.querySelector('.todoList');

let ValueList = [];

const addToStorage = (val)=>{
    return localStorage.setItem('todoData',JSON.stringify(val));    
}

const getFromStorage = ()=>{
    return JSON.parse(localStorage.getItem('todoData')) || [];
}

const showToDoList = ()=>{
    ValueList = getFromStorage();
    ValueList.forEach((currVal)=>{
        const liElement = document.createElement('li');
        liElement.innerHTML = currVal;
        todoList.append(liElement);
    });
}

removeFromTodo= (e)=>{
    // console.log(e.target.textContent); 
    // console.log(ValueList);

    let currTodo = e.target;

    updatedTodo = ValueList.filter((curr)=>
        curr !== currTodo.textContent
    );

    currTodo.remove();
    addToStorage(updatedTodo);

    // todoList.innerHTML = "";
    // showToDoList();
    
    console.log(updatedTodo);
}

const addTodolist = (e)=>{
    e.preventDefault();

    ValueList = getFromStorage();
    let newVal = listValue.value.trim();   

    if(newVal.length !== 0 && !ValueList.includes(newVal))
    {
        ValueList.push(newVal);
        addToStorage(ValueList);

        const liElement = document.createElement('li');
        liElement.innerHTML = newVal;
        todoList.append(liElement);

    }

    listValue.value = "";
}

showToDoList();

document.querySelector('.btn').addEventListener('click',(e)=>{
    addTodolist(e);
});

todoList.addEventListener("click",(e)=>{
    removeFromTodo(e);
})



