const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector(".task-list");

button.addEventListener("click", addTask);

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  taskList.appendChild(li);
  input.value = "";
}

taskList.addEventListener("click", function (e) {
  if (e.target.classList.contains("task-text")) {
    e.target.classList.toggle("completed");
  }

  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});

