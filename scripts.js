//test update
//global selectors
let inputField = document.getElementById('new-task');
let tasksContainer = document.getElementById('list-of-tasks');
let taskTemplate = document.getElementById('task-template');
let allTasksFilter = document.querySelector('.filter-all');
let activeTasksFilter = document.querySelector('.filter-active');
let completedTasksFilter = document.querySelector('.filter-completed');
let clearCompletedButton = document.getElementById('clear-completed');
let dragDropText = document.getElementById('dragdrop');


//event listener for input of new todos
inputField.addEventListener('keypress', (e) => {
    if(e.code === 'Enter'){
        e.preventDefault();
        const submittedTask = inputField.value;
        
        if(!submittedTask){
            return
        } else {
        handleTask(submittedTask);
        e.currentTarget.value='';
    }
}});

//new task creation and checkbox management
const handleTask =  (input)  => {
    const taskElement = document.importNode(taskTemplate.content, true)
    const checkbox = taskElement.querySelector('input');
    const label = taskElement.querySelector('label');
    const checkSymbol = taskElement.querySelector('.check');
    const submittedTask = taskElement.querySelector('.submitted-task');
    const deleteButton = taskElement.querySelector('button');

    checkbox.id = Date.now();
    label.htmlFor = checkbox.id;

    label.append(input);
    tasksContainer.appendChild(taskElement);
    incompleteTaskCount();
    dragDropTextToggle();

//checkbox eventlistener and definition of complete and incomplete tasks
    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            checkSymbol.style.visibility = 'visible';
            submittedTask.classList.remove('incomplete-task');
            submittedTask.classList.add('complete-task');
            incompleteTaskCount();
        } else {
            checkSymbol.style.visibility = 'hidden';
            submittedTask.classList.add('incomplete-task');
            submittedTask.classList.remove('complete-task');
            incompleteTaskCount();
        };
    });

//displaying the delete cross once the user hovers on the task
    submittedTask.addEventListener('mouseover', () => {
        deleteButton.style.display = 'block';
    });
    submittedTask.addEventListener('mouseout', () => {
        deleteButton.style.display = 'none';
    });

    
//event listener for the delete button click
    deleteButton.addEventListener('click', () => {
        submittedTask.remove();
        incompleteTaskCount();
        dragDropTextToggle();
    });

// list drag and drop set up    
    const draggables = document.querySelectorAll('.draggable');

    //drag and drop event listeners
    draggables.forEach(draggable => (
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        })
    ));

    draggables.forEach(draggable => (
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        })
    ));
   
    tasksContainer.addEventListener('dragover', e => {
        //removes the "forbidden" cursor icon
        e.preventDefault();

        const afterElement = getDraggablePosition(e.clientY);
        const currentlyDragging = document.querySelector('.dragging');

        //defines the position of the dragged element in the list
        if(afterElement == null) {
            tasksContainer.appendChild(currentlyDragging);
        } else {
            tasksContainer.insertBefore(currentlyDragging, afterElement);
        };
    });

    //uses the y position of the mouse to return the after element 
    const getDraggablePosition = (y) => {
        //creates an array of the elements on the todo list
        const draggableElements = [...tasksContainer.querySelectorAll('.draggable:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height/2;
            if(offset < 0 && offset > closest.offset){
                return {offset: offset, element: child};
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY}).element;
    };

    //adds the information on drag and drop possibility
    const allTasks = [... tasksContainer.querySelectorAll('.submitted-task')];
    if(allTasks.length > 1) {
        dragDropText.style.display = 'flex';
    };
};


//counts and displays the amount of todo tasks
const incompleteTaskCount = () => {
    const incompleteCountDisplay = document.getElementById('incomplete-count');
    let incompleteTasks = document.querySelectorAll('.incomplete-task');
    let incompleteCount = incompleteTasks.length;

    if(incompleteCount === 1){
        incompleteCountDisplay.innerHTML = `${incompleteCount} item left`;

    } else {
        incompleteCountDisplay.innerHTML = `${incompleteCount} items left`;
    };
};

//filtering and displaying functions Active, Completed and All
const filterActive = () => {
    let activeTasks = document.querySelectorAll('.incomplete-task');
    let inactiveTasks = document.querySelectorAll('.complete-task');

    activeTasks.forEach(task => {
        task.style.display ='';
    });

    inactiveTasks.forEach(task => {
        task.style.display ='none';
    });
};

const filterCompleted = () => {
    let activeTasks = document.querySelectorAll('.incomplete-task');
    let inactiveTasks = document.querySelectorAll('.complete-task');

    activeTasks.forEach(task => {
        task.style.display ='none';
    });

    inactiveTasks.forEach(task => {
        task.style.display ='';
    });
};

const filterShowAll = () => {
    let activeTasks = document.querySelectorAll('.incomplete-task');
    let inactiveTasks = document.querySelectorAll('.complete-task');

    activeTasks.forEach(task => {
        task.style.display ='';
    });

    inactiveTasks.forEach(task => {
        task.style.display ='';
    });
};

//eventlistener for filter buttons
activeTasksFilter.addEventListener('click', filterActive);
completedTasksFilter.addEventListener('click', filterCompleted);
allTasksFilter.addEventListener('click', filterShowAll);

//removes the completed tasks from the DOM
const clearCompletedTasks = () => {
    let inactiveTasks = document.querySelectorAll('.complete-task');

    inactiveTasks.forEach(task => {
        task.remove();
        dragDropTextToggle();
    });
};

//eventlistener to the clearing button
clearCompletedButton.addEventListener('click', clearCompletedTasks);

//dark theme set up
const icon = document.getElementById('icon');

icon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        icon.src = 'images/icon-sun.svg';
    } else {
        icon.src = 'images/icon-moon.svg';
    };
});

//check for the text
const dragDropTextToggle = () => {
    const allTasks = [... tasksContainer.querySelectorAll('.submitted-task')];
    if(allTasks.length > 1) {
        dragDropText.style.display = 'flex';
    } else {
        dragDropText.style.display = 'none';
    }
};

