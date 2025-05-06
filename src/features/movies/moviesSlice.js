import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesData: [],
        fetchStatus: "loading",
    },
    reducers: {
        showMovies: () => { },
        fetchDataSuccess: (state, {payload: movies}) => {
            state.fetchStatus = "success";
            state.moviesData = movies;
        },
        fetchDataError: (state) => {
            state.fetchStatus = "error";
        },
    },
});

export const {showMovies, fetchDataSuccess, fetchDataError} = moviesSlice.actions;
export const selectMovies = state => state.movies.movies;
export default moviesSlice.reducer;