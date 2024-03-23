import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormLogin from "./Page/Login.jsx";
import LangguegeContextProvider from "./Context/Langguege.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormLogin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangguegeContextProvider>
      <RouterProvider router={router} />
    </LangguegeContextProvider>
  </React.StrictMode>
);
