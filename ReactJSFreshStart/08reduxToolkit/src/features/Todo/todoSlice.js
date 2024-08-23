import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello world",
    },
  ],
};

// creating a slice
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      const todo = {
        id: nanoid(),
        text: actions.payload,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, actions) => {
      state.todos = state.todos.filter((todo) => {
        todo.id !== actions.payload;
      });
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
