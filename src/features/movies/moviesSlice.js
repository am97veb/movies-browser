import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesData: [],
    genres: [],
    fetchMoviesStatus: "idle",
  },
  reducers: {
    showMovies: () => { },
    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.fetchMoviesStatus = "success";
      state.moviesData = movies.results;
    },
    fetchMoviesLoading: (state) => {
      state.fetchMoviesStatus = "loading";
    },
    fetchMoviesError: (state) => {
      state.fetchMoviesStatus = "error";
    },
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
  },
});

export const {
  showMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  setGenres,
  fetchMoviesLoading,
  clear
} = moviesSlice.actions;
export const selectMovies = state => state.movies.moviesData;
export const selectGenres = state => state.movies.genres;
export const selectFetchMoviesStatus = state => state.movies.fetchMoviesStatus;

export default moviesSlice.reducer;