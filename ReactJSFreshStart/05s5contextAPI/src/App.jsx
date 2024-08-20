import Login from "./components/Login/Login";
import "./App.css";
import Profile from "./components/Profile/Profile";
import UserContextProvider from "./components/Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className="relative flex justify-center top-4 text-3xl">
        Passing the Data from login page to Profile using the context API
      </h1>
      <Login />

      <Profile />
    </UserContextProvider>
  );
}

export default App;
