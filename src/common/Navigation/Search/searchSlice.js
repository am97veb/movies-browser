import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchResult: {},
        searchStatus: "idle",
        query: "",
        totalResult: "idle",
    },
    reducers: {
        newSearch: (state, { payload: { trimmedValue } }) => {
            state.query = trimmedValue;
            state.searchStatus = "loading";
            state.searchResult = {};
        },
        fetchDataSuccess: (state, { payload: searchResults }) => {
            state.searchStatus = "success";
            state.searchResult = searchResults.results;
            state.totalResult = searchResults.total_results;
        },
        fetchDataError: (state) => {
            state.searchStatus = "error";
        },
        clearSearch: (state) => {
            state.query = "";
            state.status = "idle";
            state.results = {};
            state.placeholder = "";
        },
    },
});

export const { newSearch, fetchDataSuccess, fetchDataError, clearSearch} = searchSlice.actions;
export const selectSearchResult = state => state.search.searchResult;
export const selectTotalResults = state => state.search.totalResult;
export const selectSearchStatus = state => state.search.searchStatus;
export const selectQuery = state => state.search.query;

export default searchSlice.reducer;