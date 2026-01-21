// ====== DOM ELEMENTS ========
const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector(".task-list");
const emptyMessage = document.getElementById("emptyMessage");


// ======= FUNCTIONS =========
function updateEmptyState() {
  if (taskList.children.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = createTaskElement(taskText);
  taskList.appendChild(li);
  updateEmptyState();
  input.value = "";
}

function createTaskElement(taskText) {
  const li = document.createElement("li");
  li.className = "task-item";

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">X</button>
    `;

  return li;
}

// ============ EVENT ===============

button.addEventListener("click", addTask);

taskList.addEventListener("click", function (e) {
  if (e.target.classList.contains("task-text")) {
    e.target.parentElement.classList.toggle("done");
  }

  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    updateEmptyState();
  }
});

updateEmptyState();
