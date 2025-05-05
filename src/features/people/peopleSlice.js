import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        peopleData: [],
        page: 1,
        totalPages: 1,
        fetchStatus: "loading",
    },
    reducers: {
        showPeople: () => { },
        fetchDataSuccess: (state, { payload: people }) => {
            state.fetchStatus = "success";
            state.peopleData = people;
            state.totalPages = people.total_pages;
        },
        fetchDataError: (state) => {
            state.fetchStatus = "error";
        },
        firstPage:(state) => {
            state.page = 1
        },
        nextPage:(state) => {
            state.page++;  
        },
        previousPage: (state) => {
            state.page--;
        },
        lastPage: (state) => {
            state.page = state.totalPages
        }
    },
});

export const { showPeople, fetchDataSuccess, fetchDataError, firstPage, nextPage, previousPage, lastPage } = peopleSlice.actions;
export const selectPeople = state => state.people.peopleData;
export const selectPage = state => state.people.page;
export const selectPagesNumber = state => state.people.pagesNumber;
export const selectTotalPages = state => state.people.totalPages;
export default peopleSlice.reducer;