import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    data: JSON.parse(localStorage.getItem("movies")) || [],
  },
  reducers: {
    setMovies: (state, action) => {
      const movieItems = state.data.find((movie) => movie.id === action.payload.id);
      if (movieItems) {
        movieItems.quantity++;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
