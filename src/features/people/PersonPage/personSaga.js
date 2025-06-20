import { takeEvery, call, put, delay } from "redux-saga/effects";
import { showPerson, fetchPersonSuccess,fetchPersonLoading, fetchPersonError, fetchFilmographySuccess, fetchFilmographyError } from "./personSlice";
import { fetchApiData } from "../../../fetchApiData";
import { delayTime } from "../../../common/delayTime";

function* fetchPersonHandler({payload: id}) {
    try {
        yield put(fetchPersonLoading());
        yield delay(delayTime);
        const sourceApiData = `https://api.themoviedb.org/3/person/${id}?api_key=6007bf485fd1645cfc7ab81654ba3228&language=en-US`
        const person = yield call(fetchApiData, sourceApiData);
        yield put(fetchPersonSuccess(person));

        yield call(fetchFilmographyHandler, id);

    } catch (error) {
        yield put(fetchPersonError());
    }
}

function* fetchFilmographyHandler(id) {
    try {
        const sourceApiData = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=6007bf485fd1645cfc7ab81654ba3228&language=en-US`
        const filmography = yield call(fetchApiData, sourceApiData);
        yield put(fetchFilmographySuccess(filmography));
    } catch (error) {
        yield put(fetchFilmographyError());
    }
}

export function* personSaga() {
    yield takeEvery(showPerson.type, fetchPersonHandler);
}