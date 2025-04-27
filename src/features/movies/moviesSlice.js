import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        fetchStatus: "loading",
    },
    reducers: {
        fetchDataSuccess: (state, {payload: moviesData}) => {
            state.fetchStatus = "success";
            state.movies = moviesData;
        },
        fetchDataError: (state) => {
            state.fetchStatus = "error";
        },
    },
});

export const {fetchDataSuccess, fetchDataError} = moviesSlice.actions;
export const selectMovies = state => state.movies.movies;
export default moviesSlice.reducer;