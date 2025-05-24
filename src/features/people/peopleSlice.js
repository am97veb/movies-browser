import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        peopleData: [],
        fetchPeopleStatus: "idle",
    },
    reducers: {
        showPeople: () => { },
        fetchPeopleSuccess: (state, { payload: people }) => {
            state.fetchPeopleStatus = "success";
            state.peopleData = people.results;
        },
        fetchPeopleLoading: (state) => {
            state.fetchPeopleStatus = "loading"
        },
        fetchPeopleError: (state) => {
            state.fetchPeopleStatus = "error";
        },
    },
});

export const { showPeople, fetchPeopleSuccess, fetchPeopleLoading, fetchPeopleError } = peopleSlice.actions;
export const selectPeople = state => state.people.peopleData;
export const selectPeopleStatus = state => state.people.fetchStatus;

export default peopleSlice.reducer;