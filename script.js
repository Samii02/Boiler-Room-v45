// Selecting elements from the DOM
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const priorityInput = document.getElementById('priority');
const addTaskButton = document.querySelector('button');

const unCompletedTasks = document.getElementById('unCompletedTasks');  // List container for uncompleted tasks
const completedTasks = document.getElementById('completedTasks');  // List container for completed tasks

// Function to generate a random task ID
function generateId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 8; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));        
    }
    return id;
}

function checkForPlaceholder(list, placeholderId) {
    if (list.children.length === 0) {
        const placeholder = document.createElement('p');  // Create a placeholder element

        // Set placeholder text based on the list type
        placeholder.textContent = placeholderId === 'unCompleted-placeholder' ? 'Inga uppgifter än...' : 'Inga klara uppgifter än...';
        list.appendChild(placeholder);
    }
}

// Function to create a new task object and add it to the DOM
function createTaskObject() {
    const taskTitle = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const priority = priorityInput.value.toLowerCase();

    // Check if title or priority are empty
    if (!taskTitle || !priority) {
        alert("Fyll i all information som efterfrågas!");
        return;
    }

    // Create a new task object with properties
    let newTask = { 
        title: taskTitle,
        description: description,
        important: priority === "ja",
        complete: false,
        id: generateId()
    };
    console.log(newTask);

    // Create a new list item for the task
    const listItem = document.createElement('li');
    listItem.id = newTask.id;
    listItem.classList.add('task-item');  // Add a class for styling

    const taskContent = document.createElement('div');  // Create a div for the task content
    const taskTitleElement = document.createElement('strong');
    taskTitleElement.textContent = newTask.title;

    // If the task is marked as important, add an icon
    if (newTask.important) {
        const icon = document.createElement('span');
        icon.textContent = '⭐';
        icon.classList.add('important-icon');  // Add a class for styling the icon
        taskTitleElement.appendChild(icon);
    }

    // Create a paragraph for the task description
    const taskDescriptionElement = document.createElement('p');
    taskDescriptionElement.textContent = newTask.description;

    const taskId = document.createElement('p');  // Create a paragraph for the task ID
    taskId.textContent = newTask.id;

    // Append elements to the task content container
    taskContent.appendChild(taskTitleElement);
    taskContent.appendChild(taskDescriptionElement);
    taskContent.appendChild(taskId);
    listItem.appendChild(taskContent);

    // Create a button to mark the task as complete
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Klar';
    completeButton.classList.add('complete-btn');  // Add class for styling
    listItem.appendChild(completeButton);

    // Event listener to the button to complete the task
    completeButton.addEventListener('click', function() {
        completeTask(listItem);
    });

    // If there was a placeholder in the uncompleted tasks list, remove it
    const uncompletedPlaceholder = unCompletedTasks.querySelector('#unCompleted-placeholder');
    if (uncompletedPlaceholder) {
        uncompletedPlaceholder.remove();
    }

    // Append the task to the uncompleted tasks list
    unCompletedTasks.appendChild(listItem);

    // Check if the completed tasks list needs a placeholder
    checkForPlaceholder(completedTasks, 'completed-placeholder');

    // Clear input fields
    titleInput.value = '';
    descriptionInput.value = '';
    priorityInput.value = '';
}

// Function to mark a task as complete
function completeTask(taskItem) {
    // Remove the complete button from the task
    taskItem.querySelector('.complete-btn').remove();
    
    // Strike through the task title and change its color
    taskItem.querySelector('strong').style.textDecoration = 'line-through';
    taskItem.querySelector('strong').style.color = 'gray';
    taskItem.querySelectorAll('p').forEach(function(p) {
        p.style.color = 'grey';
    });

    // Remove the placeholder from the completed tasks list if present
    const completedPlaceholder = completedTasks.querySelector('#completed-placeholder');
    if (completedPlaceholder) {
        completedPlaceholder.remove();
    }

    // Create a delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Ta bort';
    deleteButton.classList.add('delete-btn');  // Add class for styling
    taskItem.appendChild(deleteButton);

    // Event listener to the delete button
    deleteButton.addEventListener('click', function() {
        deleteTask(taskItem);
    });

    // Move the task to the completed tasks list
    completedTasks.appendChild(taskItem);
    taskItem.complete = true;

    // Check if the uncompleted tasks list needs a placeholder
    checkForPlaceholder(unCompletedTasks, 'unCompleted-placeholder');
}

function deleteTask(taskItem) {
    // Remove the task item from the DOM
    taskItem.parentElement.removeChild(taskItem);

    // Check if the lists need placeholders after removal
    checkForPlaceholder(unCompletedTasks, 'unCompleted-placeholder');
    checkForPlaceholder(completedTasks, 'completed-placeholder');
}

// Event listener for the "Add Task" button to create a new task
addTaskButton.addEventListener('click', createTaskObject);

// Check for placeholders when the page loads
checkForPlaceholder(unCompletedTasks, 'unCompleted-placeholder');
checkForPlaceholder(completedTasks, 'completed-placeholder');