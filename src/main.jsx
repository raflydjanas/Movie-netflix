import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Page/Login.jsx";
import Register from "./Page/Register.jsx";
import Home from "./Page/Home.jsx";
import WatchLaterPage from "./Page/WatchLater.jsx";
import { SkeletonTheme } from "react-loading-skeleton";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import SearchMoviesPage from "./Page/SearchMovies.jsx";

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
  {
    path: "/watchlater",
    element: <WatchLaterPage />,
  },
  {
    path: "/searchmovies",
    element: <SearchMoviesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <LangguegeContextProvider>
          <RouterProvider router={router} />
        </LangguegeContextProvider>
      </SkeletonTheme>
    </Provider>
  </React.StrictMode>
);
