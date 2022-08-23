const form = document.querySelector("[data-form]");
const input = document.querySelector("[data-input]");
const submit = document.querySelector("[data-submit]");
const tasks = document.querySelector("[data-tasks]");
let taskID = 0;
let outputID = 1000;

const createTask = (task) => {
  const taskTemplate = `<div class="task" id="${taskID}">
    <div class="content">
    <input id="${outputID}" data-output type="text" value="${task}" readonly />
    </div>
    <div class="actions">
    <button data-edit onclick="doneTask(${outputID})">Done</button>
    <button data-delete onclick="deleteTask(${taskID})">Delete</button>
    </div>
    </div>`;
  const newTask = document.createElement("div");
  newTask.innerHTML = taskTemplate;

  tasks.appendChild(newTask);
  taskID++;
  outputID++;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  createTask(input.value);
  input.value = "";
});

function deleteTask(taskid) {
  const item = document.getElementById(taskid);
  item.remove();
}
function doneTask(outputID) {
  const output = document.getElementById(outputID);
  output.style.backgroundColor = "red";
}
