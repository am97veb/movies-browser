import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name: "person",
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
            console.log(state.searchResult);
        },
        fetchDataError: (state) => {
            state.searchStatus = "error";
        },
    },
});

export const { newSearch, fetchDataSuccess, fetchDataError } = personSlice.actions;
export const selectSearchResult = state => state.person.searchResult;
export const selectSearchStatus = state => state.person.searchStatus;
export const selectQuery = state => state.person.query;

export default personSlice.reducer;