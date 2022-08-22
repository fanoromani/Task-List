const form = document.querySelector("[data-form]");
const input = document.querySelector("[data-input]");
const submit = document.querySelector("[data-submit]");
const tasks = document.querySelector("[data-tasks]");
let taskID = 0;

const createTask = (task) => {
  const taskTemplate = `<div class="task" id="${taskID}">
    <div class="content">
    <input data-output type="text" value="${task}" readonly />
    </div>
    <div class="actions">
    <button data-edit onclick="editTask(${taskID})">Edit</button>
    <button data-delete onclick="deleteTask(${taskID})">Delete</button>
    </div>
    </div>`;
  const newTask = document.createElement("div");
  newTask.innerHTML = taskTemplate;

  tasks.appendChild(newTask);
  taskID++;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  createTask(input.value);
});

edit.addEventListener("click");

function deleteTask(taskID) {
  const item = document.getElementById(taskID);
  item.remove();
}
function editTask(taskID) {
  const output = document.querySelectorAll("[data-output]");
  console.log(output[taskID].value);
}
