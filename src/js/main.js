const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector(".task-list");

button.addEventListener("click", function () {
  const taskText = input.value.trim();

  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  taskList.appendChild(li);
  input.value = "";
});

