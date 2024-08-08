const title = document.querySelector("#title");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const addTask = document.querySelector("#addTask");
const taskContainer = document.querySelector("#task-container");

let taskList = [];

addTask.addEventListener("click", (e) => {
  e.preventDefault();

  taskList.push({
    title: title.value,
    description: description.value,
    dueDate: dueDate.value,
  });

  taskContainer.innerHTML = " ";
  taskList = JSON.parse(localStorage.getItem("taskList"));
  for (let i = 0; i < taskList.length; i++) {
    taskContainer.innerHTML += `
    <div class="task+${i}">
    <h3>Task ${i}</h3>
    <p>Title : ${taskList[i].title}</p>
    <p>Description : ${taskList[i].description}</p>
    <p>Due Date : ${taskList[i].dueDate}</p>
    <button class="update+${i}">Update</button> 
    <button class="delete+${i}">Delete</button>
    <div>
    `;
  }

  localStorage.setItem("taskList", JSON.stringify(taskList));
  title.value = " ";
  description.value = " ";
  dueDate.value = " ";
});


