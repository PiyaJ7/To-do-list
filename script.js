const todoList = [{
    name:'',
    dueDate:''
}];

function displayTodoList(){
    
    let todoListHTML = '';

    for(let i=1; i<todoList.length; i++){
        let todo = todoList[i];
        let {name, dueDate} = todo;
        let displayText = `
            <p>
                ${name} ${dueDate}
                <button class="deleteButton>Delete</button>
            </p>
        `

        todoListHTML += displayText;
    }

    document.querySelector('.todoList-container').innerHTML = todoListHTML;
}

function addTodoList(){
    const inputElement = document.querySelector('.add-input');
    const name = inputElement.value;

    const inputDate = document.querySelector('.date-input');
    const dueDate = inputDate.value;

    todoList.push({
        name,
        dueDate
    })

    inputElement.value = '';
    inputDate.value = '';

    displayTodoList();
}