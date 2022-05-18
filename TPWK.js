

const form = document.querySelector(".message-form");
const alert = document.querySelector(".alert");
const message = document.getElementById("message");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".message-container");
const list = document.querySelector(".message-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editFlag = false;
let editID = "";

message.addEventListener('keydown', e => {
  message.style.backgroundColor = "#bfb0f2";
  message.style.color = "black";
})

message.addEventListener('keyup', e => {

  message.style.backgroundColor = "hsl(210, 36%, 96%)";
  message.style.color = "hsl(210, 22%, 49%)";
})

form.addEventListener("submit", addItem);

clearBtn.addEventListener("click", clearItems);

window.addEventListener("DOMContentLoaded", setupItems);


function addItem(e) {
  e.preventDefault();
  const value = message.value;
  const id = new Date().getTime().toString();

  if (value !== "" && !editFlag) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("message-item");
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
              </button>
              <button type="button" class="delete-btn">
              </button>
            </div>
          `;

    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);


    list.appendChild(element);

    displayAlert("message added", "success");

    container.classList.add("show-container");

    addToLocalStorage(id, value);

    setBackToDefault();
  } else if (value !== "" && editFlag) {
    editElement.innerHTML = value;
    displayAlert("message changed", "success");


    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter message", "danger");
  }
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}


function clearItems() {
  const items = document.querySelectorAll(".message-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("no messages", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}



function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("message removed", "danger");

  setBackToDefault();

  removeFromLocalStorage(id);
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;

  editElement = e.currentTarget.parentElement.previousElementSibling;

  message.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;

  submitBtn.textContent = "edit";
}

function setBackToDefault() {
  message.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}


function addToLocalStorage(id, value) {
  const message = { id, value };
  let items = getLocalStorage();
  items.push(message);
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });

  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}


function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("message-item");
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
          
              <button type="button" class="edit-btn">
              </button>
              <button type="button" class="delete-btn">
              </button>
            </div>
          `;

  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);


  list.appendChild(element);
}