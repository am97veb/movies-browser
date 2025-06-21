import { takeEvery, call, put, delay } from "redux-saga/effects";
import { showPerson, fetchPersonSuccess,fetchPersonLoading, fetchPersonError, fetchFilmographySuccess, fetchFilmographyError } from "./personSlice";
import { fetchApiData } from "../../../fetchApiData";
import { loadingTime } from "../../../common/loadingTime";
import { API_URL,API_KEY, API_DATA_LANGUAGE } from "../../../core/apiData";

function* fetchPersonHandler({payload: id}) {
    try {
        yield put(fetchPersonLoading());
        yield delay(loadingTime);
        const sourceApiData = `${API_URL}/person/${id}?${API_KEY}${API_DATA_LANGUAGE}`
        const person = yield call(fetchApiData, sourceApiData);
        yield put(fetchPersonSuccess(person));

        yield call(fetchFilmographyHandler, id);

    } catch (error) {
        yield put(fetchPersonError());
    }
}

function* fetchFilmographyHandler(id) {
    try {
        const sourceApiData = `${API_URL}/person/${id}/movie_credits?${API_KEY}${API_DATA_LANGUAGE}`
        const filmography = yield call(fetchApiData, sourceApiData);
        yield put(fetchFilmographySuccess(filmography));
    } catch (error) {
        yield put(fetchFilmographyError());
    }
}

export function* personSaga() {
    yield takeEvery(showPerson.type, fetchPersonHandler);
}