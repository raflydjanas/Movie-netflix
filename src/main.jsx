import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Page/Login.jsx";
import Register from "./Page/Register.jsx";
import Home from "./Page/Home.jsx";

import LangguegeContextProvider from "./Context/Langguege.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangguegeContextProvider>
      <RouterProvider router={router} />
    </LangguegeContextProvider>
  </React.StrictMode>
);
