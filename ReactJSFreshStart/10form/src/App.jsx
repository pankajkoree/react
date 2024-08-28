import "./App.css";
import Login from "./components/Login";
// import Signup from "./components/Signup";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl relative top-5">
        Form data to appwrite server
      </h1>
      <div className="relative flex justify-center top-5">
        <Login />
        {/* <Signup /> */}
      </div>
    </>
  );
}

export default App;
