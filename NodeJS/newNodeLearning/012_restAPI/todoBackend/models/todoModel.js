const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("todo", todoSchema);
