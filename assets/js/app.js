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
const clearCompconstedBtn = document.querySelector(".btn_clear-compconsted");
const allItems = [];


function addNewTask() {
  const userTask = addItemInput.value;
  const newTask = {
    itemContent: userTask,
    itemId: Math.trunc(Math.random() * 200)
  };

  addItemInput.value = ' ';
  allItems.push(newTask);
  allItems.forEach(task => {
    const newTaskHTML = `
      <li class="todo_list-item">
        <div class="todo-item">
          <img class="icon-check" src="assets/images/icon-check.svg" alt="Icon check">
          <span class="item-content">${task.itemContent}</span>
        </div>
        <img class="remove-item" src="assets/images/icon-cross.svg" alt="Icone cross">
      </li>
    `;
    todoList.insertAdjacentHTML('afterbegin', newTaskHTML)

  })

  console.log(allItems);
}

addItemBtn.addEventListener('click', addNewTask)