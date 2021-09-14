let addItemInput = document.getElementById("add_item-input");
let addItemBtn = document.getElementById("add_item-btn");
let todoItems = document.querySelector(".todo_list");
let iconsCheck = document.querySelectorAll(".icon-check");
let itemContent = document.querySelector(".item-content");
let entryText = document.querySelector(".entry-text");
let itemsLeft = document.querySelector(".number_item-left");
let removeItemBtn = document.querySelector(".remove-item");
let modal = document.querySelector(".container_modal");
let closeModalBtn = document.querySelector(".modal_btn-no");
let backdrop = document.querySelector(".backdrop");
let clearCompletedBtn = document.querySelector(".btn_clear-completed");
let allItems = [];

iconsCheck.forEach(iconCheck => {
    iconCheck.addEventListener("click", () => console.log("OLá"));
});


let showModal = () => {
    backdrop.style.display = "block";
    modal.style.display = "block";
}

let hideBackdrop = () =>{
    backdrop.style.display = "none";
    modal.style.display = "none";
}

let removeItem = () =>{
    todoItems.removeChild(todoItems.children[0]);
}

let hideEntryText = () =>{
    if(allItems.length > 0){
        entryText.style.display = "none";
    } else{
        entryText.style.display = "block";
    }
}

let checkItem = () =>{
    iconCheck.classList.toggle("icon-checked");
    itemContent.classList.toggle("item-checked");
}

let createItem = (id, item) =>{
    let newItem = document.createElement("li");
    newItem.classList.add("todo_list-item")
    newItem.innerHTML = 
        `
        <div class="todo-item">
            <img class="icon-check" src="assets/images/icon-check.svg" alt="Icon check">
            <span class="item-content">${item}</span>
        </div>
        <img class="remove-item" src="assets/images/icon-cross.svg" alt="Icone cross">
        `;

        //todoItems.insertAdjacentElement("afterbegin", newItem);

        todoItems.appendChild(newItem);
    }

let addItem = () =>{
    inputValue = addItemInput.value;
    if(inputValue == undefined || inputValue == ""){
        alert("Insira uma actividade válida!");
    } else{
        let itemId = Math.random();
        let itemState = "active";
        let newItem ={Item_id: itemId, Item_content: inputValue, Item_state: itemState};

        createItem(newItem.Item_id, newItem.Item_content);
        allItems.push(newItem);
    }

    addItemInput.value = ""; 
    itemsLeft.innerHTML = allItems.length;
    hideEntryText(); 

    console.log(allItems);
}


addItemBtn.addEventListener("click", addItem);
//iconCheck.addEventListener("click", checkItem);
removeItemBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", hideBackdrop);
backdrop.addEventListener("click", hideBackdrop);
clearCompletedBtn.addEventListener("click", showModal);