let todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name:'',
    dueDate:'',
    completed: false
}];

displayTodoList();

function markAsDone(checkbox, index) {
    todoList[index].completed = checkbox.checked;
    updateLocalStorage();
    displayTodoList();
}


function displayTodoList(){
    
    let todoListHTML = '';

    for(let index=0; index<todoList.length; index++){
        let todo = todoList[index];
        let {name, dueDate, completed} = todo;
        let displayText = `
            <div class="text-div">
                <div class="name-div" style="color: ${completed ? 'rgba(209, 205, 205, 0.956)' : 'black'}">${name}</div>
                <div class="dueDate-div" style="color: ${completed ? 'rgba(209, 205, 205, 0.956)' : 'black'}">${dueDate}</div>
                <div class="button-div">
                    <label for="completeButton"></label> 
                    <input type="checkbox" id="completeButton" ${completed ? 'checked' : ''} onclick="markAsDone(this, ${index})">
                    <button class="deleteButton"><img src="images/delete icon.png" class="delete-icon"></button>
                </div>
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

    document.querySelectorAll('.completeButton').forEach((completeButton, index) => {
        let clickCount = 1;
        if(clickCount == 1){
            completeButton.addEventListener('click', () => {


            });
        }
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