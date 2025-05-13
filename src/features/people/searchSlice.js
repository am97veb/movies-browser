import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchResult: {},
        searchStatus: "idle",
        query: "",
    },
    reducers: {
        newSearch: (state, action) => {
            state.query = action.payload;
            state.searchStatus = "loading"
         },
        fetchDataSuccess: (state, { payload: personSearch }) => {
            state.searchStatus = "success";
            state.searchResult = personSearch;
        },
        fetchDataError: (state) => {
            state.searchStatus = "error";
        },
    },
});

export const { newSearch, fetchDataSuccess, fetchDataError } = searchSlice.actions;
export const selectSearchResult = state => state.search.searchResult;
export const selectSearchStatus = state => state.search.searchStatus;
export const selectQuery = state => state.search.query;

export default searchSlice.reducer;