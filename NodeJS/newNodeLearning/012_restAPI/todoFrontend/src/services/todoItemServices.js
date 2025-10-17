import axios from "axios";

export const addTodoItem = async (task, date) => {
  try {
    let response = await axios.post("http://localhost:3000/api/todos", {
      task,
      date,
    });
    if (response.status === 200 && response) {
      console.log("Data found : ", response);
      return mapServerDataToLocalItemData(response.data.todoItem);
    } else {
      console.log("data not found");
    }
  } catch (error) {
    console.log("Unable to add todo item : ", error);
  }
};

export const getTodoItem = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/todos");
    if (response.status === 200) {
      const todos = response.data.todoItems || [];
      console.log("Items : ", todos);
      console.log(todos.map(mapServerDataToLocalItemData));
      return todos.map(mapServerDataToLocalItemData);
    } else {
      console.log("items not dound");
    }
  } catch (error) {
    console.log("Unable to fetch todos : ", error);
  }
};

export const markedCompleted = async (id) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/todos/${id}/completed`
    );
    if (response.status === 200) {
      console.log("marked as completed");
      return markedCompleted(response.data.dataItem);
    } else {
      console.log("not completed");
    }
  } catch (error) {
    console.log("Unable to mark completed : ", error);
  }
};

export const deleteTodoItem = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/todos/${id}`
    );
    if (response.status) {
      console.log("todo deleted");
      return id;
    } else {
      console.log("unable to delete the todo");
    }
  } catch (error) {
    console.log("Unable to delete todo : ", error);
  }
};

const mapServerDataToLocalItemData = (serverData) => {
  return {
    id: serverData._id,
    name: serverData.task,
    dueDate: serverData.date,
    completed: serverData.completed,
    createdAt: serverData.createdAt,
    updatedAt: serverData.updatedAt,
  };
};
