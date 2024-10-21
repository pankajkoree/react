// file system as fs

const fs = require("fs");
const { argv } = require("process");

const filePath = "./tasks.json";
// argv = argument value, which is an array
const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === list) {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("command not found...");
}
