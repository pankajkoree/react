import { createRoot } from "react-dom/client";
import App from "./App";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/country",
    element: <CountryDetail />,
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    {/*
      <Header />
       // this is also a way to reuse existing comoponent but not a good way */}
    <RouterProvider router={router} />
  </>
);
