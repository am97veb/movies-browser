import { takeEvery, call, put, select } from "redux-saga/effects";
import { showPerson, fetchPersonSuccess, fetchPersonError, fetchFilmographySuccess, fetchFilmographyError  } from "./personSlice";
import { fetchApiData } from "../../../fetchApiData";
import {  selectPersonId } from "./personSlice";

function* fetchPersonHandler() {
    try {
        const personId = yield select(selectPersonId);
        const sourceApiData = `https://api.themoviedb.org/3/person/${personId}?api_key=6007bf485fd1645cfc7ab81654ba3228&language=en-US`
        const person = yield call(fetchApiData, sourceApiData);
        yield put(fetchPersonSuccess(person));

        yield call(fetchFilmographyHandler, personId);

    } catch (error) {
        yield put(fetchPersonError());

    }
}

function* fetchFilmographyHandler(personId) {
    try {
        const sourceApiData = `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=6007bf485fd1645cfc7ab81654ba3228&language=en-US`
        const filmography = yield call(fetchApiData, sourceApiData);
        yield put(fetchFilmographySuccess(filmography));
    } catch (error) {
        yield put(fetchFilmographyError());
    }
}


export function* personSaga() {
    yield takeEvery(showPerson.type, fetchPersonHandler);
}