const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const priorityInput = document.getElementById('priority');
const addTaskButton = document.querySelector('button');

const unCompletedTasks = document.getElementById('unCompletedTasks');
const completedTasks = document.getElementById('completedTasks');

function generateId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 8; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));        
    }
    console.log(id);
    return id;
}

function createTaskObject() {
    const taskTitle = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const priority = priorityInput.value.trim().toLowerCase();

    if (!taskTitle || !description || !priority) {
        alert("Please fill in all fields.");
        return;
    }

    if (priority !== "ja" && priority !== "nej") {
        alert('Skriv antingen "Ja" eller "Nej"!');
        priorityInput.value = '';
        return;
    }

    let newTask = { 
        title: taskTitle,
        description: description,
        complete: false,
        id: generateId()
    };
    console.log(newTask);

    const listItem = document.createElement('li');
    listItem.id = newTask.id;
    listItem.classList.add('task-item');

    const taskContent = document.createElement('div');
    const taskTitleElement = document.createElement('strong');
    taskTitleElement.textContent = newTask.title;

    const taskDescriptionElement = document.createElement('p');
    taskDescriptionElement.textContent = newTask.description;

    const taskId = document.createElement('p');
    taskId.textContent = newTask.id;

    taskContent.appendChild(taskTitleElement);
    taskContent.appendChild(taskDescriptionElement);
    taskContent.appendChild(taskId);
    listItem.appendChild(taskContent);


    const completeButton = document.createElement('button');
    completeButton.textContent = 'Klar';
    completeButton.classList.add('complete-btn');
    listItem.appendChild(completeButton);

    completeButton.addEventListener('click', function() {
        completeTask(listItem);
    });

    unCompletedTasks.appendChild(listItem);

    titleInput.value = '';
    descriptionInput.value = '';
    priorityInput.value = '';
}

function completeTask(taskItem) {
    taskItem.querySelector('.complete-btn').remove();
    
    taskItem.querySelector('strong').style.textDecoration = 'line-through';
    taskItem.querySelector('strong').style.color = 'gray';
    taskItem.querySelectorAll('p').forEach(function(p) {
        p.style.color = 'grey';
    })

    completedTasks.appendChild(taskItem);
    taskItem.complete = true;
}
addTaskButton.addEventListener('click', createTaskObject);