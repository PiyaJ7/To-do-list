const todoList = [{
    name:'',
    dueDate:''
}];


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
            displayTodoList();
        } );
        
    });
}

function addTodoList(){

    todoList = JSON.parse(localStorage.getItem('todoList')) || [{
        name:'',
        dueDate:''
    }];

    const inputElement = document.querySelector('.add-input');
    const name = inputElement.value;

    const inputDate = document.querySelector('.date-input');
    const dueDate = inputDate.value;

    todoList.push({
        name,
        dueDate
    })

    localStorage.setItem('todoList', JSON.stringify(todoList));

    inputElement.value = '';
    inputDate.value = '';

    displayTodoList();
}