import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slice";

const store = configureStore({
  reducer: {
    movie: moviesSlice,
  },
});

console.log("on create store ", store.getState());

store.subscribe(() => {
  console.log("store change", store.getState());
});

export default store;
