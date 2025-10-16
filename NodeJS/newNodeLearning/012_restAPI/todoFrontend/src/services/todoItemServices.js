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
    const respose = await axios.get("http://localhost:3000/api/todos");
    if (respose.status === 200) {
      console.log("Items : ", respose);
      return mapServerDataToLocalItemData(respose.data.dataItem);
    } else {
      console.log("items not dound");
    }
  } catch (error) {
    console.log("Unable to fetch todos : ", error);
  }
};

export const markedCompleted = async (id) => {
  const response = await axios.put(
    `http://localhost:3000/api/todos/${id}/completed`
  );
  
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
