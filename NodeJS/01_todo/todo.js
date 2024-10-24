// file system as fs

const fs = require("fs");
const path = require("path");
const { argv } = require("process");

const filePath = path.join(__dirname, "tasks.json");

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
  console.log("Task added", task);
};
const removeTask = () => {
  const tasks = loadTasks();
  tasks.pop();
  saveTasks(tasks);
  console.log("Task removed");
};

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
};
// argv = argument value, which is an array
const command = argv[2];
const argument = argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask();
} else {
  console.log("command not found...");
}
