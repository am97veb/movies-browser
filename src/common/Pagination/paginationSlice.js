import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        page: 1,
        totalPages: 1,
        contentType: null,
    },
    reducers: {
        contentType: (state, {payload: contentType}) => {
            state.contentType = contentType;
            state.page = 1;
        },
        totalPages:(state, {payload: data}) =>{
            state.totalPages = data.total_pages > 500 ? 500 : data.total_pages;
        },
        firstPage: (state) => {
            state.page = 1
        },
        nextPage: (state) => {
          state.page++;
        },
        previousPage: (state) => {
            state.page--;
        },
        lastPage: (state) => {
            state.page = state.totalPages;
        }
    },
});

export const { contentType, totalPages, firstPage, nextPage, previousPage, lastPage } = paginationSlice.actions;
export const selectPage = state => state.pagination.page;
export const selectTotalPages = state => state.pagination.totalPages;
export const selectContentType = state => state.pagination.contentType;
export default paginationSlice.reducer;