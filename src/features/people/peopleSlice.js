import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        peopleData: [],
        fetchStatus: "loading",
    },
    reducers: {
        showPeople: () => { },
        fetchDataSuccess: (state, { payload: people }) => {
            state.fetchStatus = "success";
            state.peopleData = people.results;
        },
        fetchDataError: (state) => {
            state.fetchStatus = "error";
        },
    },
});

export const { showPeople, fetchDataSuccess, fetchDataError } = peopleSlice.actions;
export const selectPeople = state => state.people.peopleData;
export const selectPeopleStatus = state => state.people.fetchStatus;

export default peopleSlice.reducer;