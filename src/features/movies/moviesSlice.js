import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesData: [],
    genres: [],
    movieDetails: {},
    fetchStatus: "loading",
    fetchDetailsStatus: "loading",
  },
  reducers: {
    showMovies: () => { },
    getMovieDetails: () => { },
    fetchDataSuccess: (state, { payload: movies }) => {
      state.fetchStatus = "success";
      state.moviesData = movies.results;
    },
    fetchMovieDetailsSuccess: (state, { payload }) => {
      state.fetchDetailsStatus = "success";
      state.movieDetails = payload;
    },

    fetchDataError: (state) => {
      state.fetchStatus = "error";
    },
    fetchMovieDetailsError: (state) => {
      state.fetchDetailsStatus = "error";
    },
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
  },
});

export const {
  showMovies,
  getMovieDetails,
  fetchDataSuccess,
  fetchMovieDetailsSuccess,
  fetchDataError,
  fetchMovieDetailsError,
  setGenres
} = moviesSlice.actions;
export const selectMovies = (state) => state.movies.moviesData;
export const selectGenres = (state) => state.movies.genres;
export const selectMovieDetails = (state) => state.movies.movieDetails;
export const selectCast = state => state.movies.movieDetails.cast;
export const selectCrew = state => state.movies.movieDetails.crew;

export default moviesSlice.reducer;

