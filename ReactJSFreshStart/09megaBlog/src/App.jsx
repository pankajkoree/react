import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log("Error while logging in...", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div
      style={{
        width: "50px",
        aspectRatio: "1",
        borderRadius: "50%",
        padding: "6px",
        background: `
          conic-gradient(from 135deg at top,currentColor 90deg, transparent 0) 0 calc(50% - 4px)/17px 8.5px,
          radial-gradient(farthest-side at bottom left,transparent calc(100% - 6px),currentColor calc(100% - 5px) 99%,transparent) top right/50%  50% content-box content-box,
          radial-gradient(farthest-side at top,transparent calc(100% - 6px),currentColor calc(100% - 5px) 99%,transparent) bottom /100% 50% content-box content-box
        `,
        backgroundRepeat: "no-repeat",
        animation: "l11 1s infinite linear",
      }}
    ></div>
  );
}

export default App;
