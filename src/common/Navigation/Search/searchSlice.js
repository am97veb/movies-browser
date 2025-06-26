import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchResult: null,
        searchStatus: "idle",
        query: "",
        totalResult: "idle",
    },
    reducers: {
        newSearch: (state, { payload: { trimmedValue } }) => {
            state.query = trimmedValue;
            state.searchResult = {};
        },
        fetchDataLoading: (state) => {
            state.searchStatus = "loading";

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
            state.searchResult = null;
            state.searchStatus = "idle";
            state.query = "";
            state.totalResult = "idle";
        },
    },
});

export const { newSearch, fetchDataLoading, fetchDataSuccess, fetchDataError, clearSearch } = searchSlice.actions;
export const selectSearchResult = state => state.search.searchResult;
export const selectTotalResults = state => state.search.totalResult;
export const selectSearchStatus = state => state.search.searchStatus;
export const selectQuery = state => state.search.query;

export default searchSlice.reducer;