let todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name:'',
    dueDate:''
}];

displayTodoList();

function displayTodoList(){
    
    let todoListHTML = '';

    for(let index=0; index<todoList.length; index++){
        let todo = todoList[index];
        let {name, dueDate} = todo;
        let displayText = `
            <div class="text-div">
                <div class="name-div">${name}</div>
                <div class="dueDate-div">${dueDate}</div>
                <div class="delete-button-div"><button class="deleteButton"><img src="images/delete icon.png" class="delete-icon"></button></div>
            </div>
        `

        todoListHTML += displayText;        
    }

    document.querySelector('.todoList-container').innerHTML = todoListHTML;

    document.querySelectorAll('.deleteButton').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            updateLocalStorage();
            displayTodoList();
        } );
        
    });
}

function addTodoList(){

    

    const inputElement = document.querySelector('.add-input');
    const name = inputElement.value;

    if (name === '') {
        alert('Please enter a valid name for the task.');
        return;
    }

    const inputDate = document.querySelector('.date-input');
    const dueDate = inputDate.value;

    if (dueDate === '') {
        alert('Please enter a due date for the task.');
        return;
    }

    todoList.push({
        name,
        dueDate
    })

    inputElement.value = '';
    inputDate.value = '';

    updateLocalStorage();
    displayTodoList();
}

function updateLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}