const title = document.querySelector("#title");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const addTask = document.querySelector("#addTask");
const taskContainer = document.querySelector("#task-container");
const dataHeading = document.querySelector("#headingForForm");
let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
let taskToUpdateIndex = null;
if (taskList.values.length == 0) {
  taskContainer.style.display = "none";
}

function renderTasks() {
  taskContainer.innerHTML = "";
  taskList.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add(`task-${index}`);
    taskDiv.innerHTML = `
      <h3>Task ${index}</h3>
      <p>Title : ${task.title}</p>
      <p>Description : ${task.description}</p>
      <p>Due Date : ${task.dueDate}</p>
      <button class="update-btn" data-index="${index}">Update</button>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    taskContainer.appendChild(taskDiv);
  });

  document.querySelectorAll(".update-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      taskToUpdateIndex = index;
      const task = taskList[index];
      title.value = task.title;
      description.value = task.description;
      dueDate.value = task.dueDate;
      dataHeading.textContent = "Update Details";
      addTask.textContent = "Update Details";
    });
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (confirm("Press a button!") == true) {
        const index = e.target.getAttribute("data-index");
        taskList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(taskList));
        renderTasks();
      } else {
        console.log("You cancelled to delete");
      }
    });
  });
}

addTask.addEventListener("click", (e) => {
  e.preventDefault();
  taskContainer.style.display = "block";
  if (title.value && description.value && dueDate.value) {
    const updatedTask = {
      title: title.value,
      description: description.value,
      dueDate: dueDate.value,
    };
    if (
      addTask.textContent === "Update Details" &&
      taskToUpdateIndex !== null
    ) {
      taskList[taskToUpdateIndex] = updatedTask;
      taskToUpdateIndex = null;
      addTask.textContent = "Add Task";
      dataHeading.textContent = "Task Details Entry";
    } else {
      taskList.push(updatedTask);
    }
    localStorage.setItem("taskList", JSON.stringify(taskList));
    renderTasks();
    title.value = "";
    description.value = "";
    dueDate.value = "";
  } else {
    alert("Please fill in all fields.");
  }
});

renderTasks();
