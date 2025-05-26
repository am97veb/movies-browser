import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "movie",
    initialState: {
        movieDetails: {},
        fetchMovieDetailsStatus: "idle",
    },
    reducers: {
        getMovieDetails: () => {
        },
        fetchMovieDetailsSuccess: (state, { payload }) => {
            state.fetchMovieDetailsStatus = "success";
            state.movieDetails = payload;
        },
        fetchMovieDetailsError: (state) => {
            state.fetchMovieDetailsStatus = "error";
        },
        fetchMovieDetailsLoading: (state) => {
            state.fetchMovieDetailsStatus = "loading";
        },
        clear: (state) => {
            state.movieDetails = {};
            state.fetchMovieDetailsStatus = "idle";
        },
    },
});

export const {
    getMovieDetails,
    fetchMovieDetailsSuccess,
    fetchMovieDetailsError,
    fetchMovieDetailsLoading,
    clear
} = movieDetailsSlice.actions;

export const selectMovieDetails = state => state.movie.movieDetails;
export const selectCast = state => state.movie.movieDetails.cast;
export const selectCrew = state => state.movie.movieDetails.crew;
export const selectFetchMovieDetailsStatus = state => state.movie.fetchMovieDetailsStatus;

export default movieDetailsSlice.reducer;

