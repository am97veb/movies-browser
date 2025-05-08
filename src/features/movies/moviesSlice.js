import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesData: [],
    genres: [],
    fetchStatus: "loading",
  },
  reducers: {
    showMovies: () => {},
    fetchDataSuccess: (state, { payload: movies }) => {
      state.fetchStatus = "success";
      state.moviesData = movies;
    },
    fetchDataError: (state) => {
      state.fetchStatus = "error";
    },
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
  },
});

export const { showMovies, fetchDataSuccess, fetchDataError, setGenres } = moviesSlice.actions;
export const selectMovies = (state) => state.movies.moviesData;
export const selectGenres = (state) => state.movies.genres;
export default moviesSlice.reducer;

