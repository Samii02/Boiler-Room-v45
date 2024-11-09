const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const priorityInput = document.getElementById('priority');
const addTaskButton = document.querySelector('button');

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
    const priority = priorityInput.value.trim();

    if (!taskTitle || !description || !priority) {
        alert("Please fill in all fields.");
        return;
    }

    let newTask = { 
        title: taskTitle,
        description: description,
        done: false,
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

    taskContent.appendChild(taskTitleElement);
    taskContent.appendChild(taskDescriptionElement);
    listItem.appendChild(taskContent);

        // Create and add the "Complete" button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-btn');
    listItem.appendChild(completeButton);

    // Add the event listener to the "Complete" button
    completeButton.addEventListener('click', function() {
        completeTask(listItem);
    });

    unCompletedTasks.appendChild(listItem);

    titleInput.value = '';
    descriptionInput.value = '';
    priorityInput.value = '';
}

function completeTask(taskItem) {
    // Mark the task as done and move it to the completed tasks list
    taskItem.querySelector('.complete-btn').remove();  // Remove the complete button when the task is done
    
    // Optionally, strike-through the title or change the color to indicate completion
    taskItem.querySelector('strong').style.textDecoration = 'line-through';
    taskItem.querySelector('strong').style.color = 'gray';

    // Append the task to the completed tasks list
    completedTasks.appendChild(taskItem);
}
addTaskButton.addEventListener('click', createTaskObject);