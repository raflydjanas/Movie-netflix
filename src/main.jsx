import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Page/Login.jsx";
import Register from "./Page/Register.jsx";
import Home from "./Page/Home.jsx";
import { SkeletonTheme } from "react-loading-skeleton";

import LangguegeContextProvider from "./Context/Langguege.jsx";

import "./index.css";
import MovieDetails from "./Page/MovieDetails.jsx";

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
  {
    path: "/details/:id",
    element: <MovieDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <LangguegeContextProvider>
        <RouterProvider router={router} />
      </LangguegeContextProvider>
    </SkeletonTheme>
  </React.StrictMode>
);
