import AddTodo from "./components/addTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="w-full text-center">
        <h1>Learn about redux toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
