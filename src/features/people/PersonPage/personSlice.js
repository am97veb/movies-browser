import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name: "person",
    initialState: {
        personData: [],
        filmographyData: [],
        fetchStatus: "idle",
    },
    reducers: {
        showPerson: () => {
        },
        fetchPersonSuccess: (state, { payload: person }) => {
            state.personData = person;
            state.fetchStatus = "success";
        },
        fetchPersonError: (state) => {
            state.fetchStatus = "error";
        },
        fetchFilmographySuccess: (state, { payload: filmography }) => {
            state.filmographyData = filmography;
            state.fetchStatus = "success";
        },
        fetchFilmographyError: (state) => {
            state.fetchStatus = "error";
        },
        fetchPersonLoading: (state) => {
            state.fetchStatus = "loading"
        },
        clear: (state) => {
            state.personData = [];
            state.filmographyData = [];
            state.fetchStatus = "idle";
        }
    },
})

export const {
    showPerson,
    fetchPersonSuccess,
    fetchPersonError,
    fetchFilmographySuccess,
    fetchFilmographyError,
    fetchPersonLoading: fetchDataLoading,
    clear
} = personSlice.actions;
export const selectPerson = state => state.person.personData;
export const selectFetchPersonStatus = state => state.person.fetchStatus;
export const selectFilmography = state => state.person.filmographyData;
export const selectCast = state => selectFilmography(state).cast;
export const selectCrew = state => selectFilmography(state).crew;
export default personSlice.reducer;