const express = require("express");
const todoRouter = express.Router();
const todoController = require("../controllers/todoController");

todoRouter.post("/api/todos", todoController.postTodo);
todoRouter.get("/api/todos", todoController.getTodo);
todoRouter.delete("/api/todos/:id", todoController.deleteItem);
todoRouter.put("/api/todos/:id/completed", todoController.markCompleted);
module.exports = todoRouter;
