import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name: "person",
    initialState: {
        personData: [],
        personId: null,
        filmographyData: [],
        fetchStatus: "loading",
    },
    reducers: {
        showPerson: (state, {payload:id}) => {
            state.personId = id;
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
            console.log(filmography);
        },
        fetchFilmographyError: (state) => {
            state.fetchStatus = "error";
        },
    },
})

export const { showPerson, fetchPersonSuccess, fetchPersonError, fetchFilmographySuccess, fetchFilmographyError } = personSlice.actions;
export const selectPerson = state => state.person.personData;
export const selectPersonId = state => state.person.personId;
export const selectFilmography = state => state.person.filmographyData;
export const selectCast = state => selectFilmography(state).cast;
export const selectCrew = state => selectFilmography(state).crew;
export default personSlice.reducer;