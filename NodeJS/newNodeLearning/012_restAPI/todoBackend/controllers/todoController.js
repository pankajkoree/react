const todo = require("../models/todoModel");

// api to create a new todo
exports.postTodo = async (req, res, next) => {
  const { task, date } = req.body;
  const todoItem = new todo({ task, date });
  await todoItem.save();
  return res.status(200).json({
    todoItem,
  });
};

// api to fetch the todos
exports.getTodo = async (req, res, next) => {
  try {
    const todoItems = await todo.find();
    if (todoItems) {
      return res.status(200).json({ todoItems });
    } else {
      return res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// api to delete a specific todo with id
exports.deleteItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await todo.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Todo not found" });
    }
    return res
      .status(200)
      .json({ _id: id, message: "Todo deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.markCompleted = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todoItem = await todo.findById(id);
    if (!todoItem) {
      return res.status(404).json({ message: "Todo item not found" });
    }
    todoItem.completed = true;
    await todoItem.save();
    return res.status(200).json("todo completed");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
