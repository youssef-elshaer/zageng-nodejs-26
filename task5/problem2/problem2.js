let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  let taskText = input.value;

  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function () {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
    } else {
      li.style.textDecoration = "line-through";
    }
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  input.value = "";
});
