'use strict';

const addItemInput = document.getElementById("add_item-input");
const addItemBtn = document.getElementById("add_item-btn");
const todoList = document.querySelector(".todo_list");
const iconsCheck = document.querySelector(".icon-check");
const itemContent = document.querySelector(".item-content");
const entryText = document.querySelector(".entry-text");
const itemsLeft = document.querySelector(".number_item-left");
const removeItemBtn = document.querySelector(".remove-item");
const modal = document.querySelector(".container_modal");
const closeModalBtn = document.querySelector(".modal_btn-no");
const backdrop = document.querySelector(".backdrop");
const btnClearCompleted = document.querySelector(".btn_clear-completed");
const showActiveTask = document.querySelector('.show-active');
const showCompletedTask = document.querySelector('.show-completed');
const showAllTask = document.querySelector('.show-all');

const allTasks = [
  {id: 1, task: 'Study hooks', status: 'active'},
  {id: 2, task: 'Play footbal', status: 'active'},
  {id: 3, task: 'Go to shop', status: 'completed'},
  {id: 4, task: 'Eat', status: 'completed'}
];


function displayTasks(tasks) {
  tasks.forEach(task => {
    const html =`
      <li class="todo_list-item">
        <div class="todo-item">
          <img class="icon-check" src="assets/images/icon-check.svg" alt="Icon check">
          <span class="item-content">${task.task}</span>
          </div>
            <img class="remove-item" src="assets/images/icon-cross.svg" alt="Icone cross">
      </li
    `;
    
    // ADD ITEM TO HTML DOCUMENT
    todoList.insertAdjacentHTML('afterbegin', html);
  })
};

function updateUI(tasks) {
  // CLEAR EXISTING ITEMS
  todoList.innerHTML = '';
  
  // NUMBER OF REMAINING TASKS
  itemsLeft.textContent = allTasks.length;

  addItemInput.value = '';
  if(tasks.length > 0) {
    displayTasks(tasks);
    entryText.hidden = true;
  } else {
      entryText.hidden = false;
    }
};

updateUI(allTasks);

// ADD NEW ITEM TO ARRAY
function addNewTask() {
  const task = addItemInput.value;
  if(task === '') {
    alert('Invalid task');
  } else {
      const newTask = {id: Math.trunc((Math.random() * 100)), task, status: 'active'};
  
      allTasks.push(newTask);
  
      updateUI(allTasks);
  }
};

function showActive() {
  const tasks = allTasks
    .slice(0)
    .filter(task => task.status === 'active');
  

  showActiveTask.classList.add('active');
  showCompletedTask.classList.remove('active');
  showAllTask.classList.remove('active');

  updateUI(tasks);
};

function showCompleted() {
  const tasks = allTasks
    .slice(0)
    .filter(task => task.status === 'completed');

  showActiveTask.classList.remove('active');
  showCompletedTask.classList.add('active');
  showAllTask.classList.remove('active');

  updateUI(tasks);
};

function showAll() {
  showActiveTask.classList.remove('active');
  showCompletedTask.classList.remove('active');
  showAllTask.classList.add('active');

  updateUI(allTasks);
};

function clearcompletedTask() {
    for(const i = 0; i < allTasks.length; i++) {
      allTasks.forEach((task, idx) => {
        return task.status === 'completed' ? allTasks.splice(idx, 1) : allTasks;
    });
      updateUI(allTasks);
  };
};

//  EVENT LISoTENERS
addItemBtn.addEventListener('click', addNewTask);
showActiveTask.addEventListener('click', showActive);
showCompletedTask.addEventListener('click', showCompleted);
showAllTask.addEventListener('click', showAll);
btnClearCompleted.addEventListener('click', clearcompletedTask)
