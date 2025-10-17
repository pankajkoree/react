import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useEffect, useState } from "react";
import {
  addTodoItem,
  deleteTodoItem,
  getTodoItem,
  markedCompleted,
} from "./services/todoItemServices";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  useEffect(() => {
    getTodoItem().then((items) => {
      setTodoItems(items);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    const item = await addTodoItem(itemName, itemDueDate);
    const newTodoItems = [...todoItems, item];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = async (id) => {
    const deleteId = await deleteTodoItem(id);
    const deletedTodo = todoItems.filter((item) => item.id !== deleteId);
    setTodoItems(deletedTodo);
  };

  const handleComplete = async (id) => {
    const updatedItem = await markedCompleted(id);
    setTodoItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: true } : item))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
          onCompleteClick={handleComplete}
        ></TodoItems>
      </div>
    </div>
  );
}

export default App;
