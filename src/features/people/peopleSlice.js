import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        peopleData: [],
        fetchStatus: "loading",
    },
    reducers: {
        showPeople: () => { },
        fetchDataSuccess: (state, { payload: peopleData }) => {
            state.fetchStatus = "success";
            state.peopleData = peopleData;
        },
        fetchDataError: (state) => {
            state.fetchStatus = "error";
        },
    },
});

export const { showPeople, fetchDataSuccess, fetchDataError } = peopleSlice.actions;
export const selectPeople = state => state.people.peopleData;
export default peopleSlice.reducer;