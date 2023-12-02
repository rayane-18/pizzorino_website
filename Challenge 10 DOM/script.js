document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  const taskText = document.createTextNode(taskInput.value);
  const listItem = document.createElement("li");

  listItem.appendChild(taskText);

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.addEventListener("click", () => {
    listItem.remove();
    saveTasks();
  });

  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.addEventListener("click", () => {
    listItem.classList.toggle("completed");
    saveTasks();
  });

  listItem.appendChild(removeButton);
  listItem.appendChild(completeButton);

  taskList.appendChild(listItem);
  taskInput.value = "";
  saveTasks();
}

function saveTasks() {
  const taskList = document.getElementById("taskList");
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = localStorage.getItem("tasks") || "";
}
