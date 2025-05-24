import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesData: [],
    genres: [],
    movieDetails: [],
    fetchMoviesStatus: "idle",
    fetchMovieDetailsStatus: "idle",
  },
  reducers: {
    showMovies: () => { },
    getMovieDetails: () => {
    },
    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.fetchMoviesStatus = "success";
      state.moviesData = movies.results;
    },
    fetchMovieDetailsSuccess: (state, { payload }) => {
      state.fetchMovieDetailsStatus = "success";
      state.movieDetails = payload;
    },
    fetchMoviesError: (state) => {
      state.fetchMoviesStatus = "error";
    },
    fetchMovieDetailsError: (state) => {
      state.fetchMovieDetailsStatus = "error";
    },
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
    fetchMovieDetailsLoading: (state) => {
      state.fetchMovieDetailsStatus = "loading";
    },
    fetchMoviesLoading: (state) => {
      state.fetchMoviesStatus = "loading";
    },
    clear: (state) => {
      state.movieDetails = [];
      state.movieId = "idle";
      state.fetchMovieDetailsStatus = "idle";
    },
  },
});

export const {
  showMovies,
  getMovieDetails,
  fetchMoviesSuccess,
  fetchMovieDetailsSuccess,
  fetchMoviesError,
  fetchMovieDetailsError,
  setGenres,
  fetchMoviesLoading,
  fetchMovieDetailsLoading,
  clear
} = moviesSlice.actions;
export const selectMovies = state => state.movies.moviesData;
export const selectGenres = state => state.movies.genres;
export const selectMovieDetails = state => state.movies.movieDetails;
export const selectCast = state => state.movies.movieDetails.cast;
export const selectCrew = state => state.movies.movieDetails.crew;
export const selectFetchMoviesStatus = state => state.movies.fetchMoviesStatus;
export const selectFetchMovieDetailsStatus = state => state.movies.fetchMovieDetailsStatus;

export default moviesSlice.reducer;

