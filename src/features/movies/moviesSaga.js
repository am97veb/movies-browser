import { put, call } from "redux-saga/effects";
import { fetchApiData } from "../../fetchApiData";
import { fetchDataError, fetchDataSuccess } from "./moviesSlice";

function* fetchMoviesHandler() {
    try {
        const moviesData = yield call(fetchApiData);
        yield put(fetchDataSuccess(moviesData));
    } catch (error) {
        yield put(fetchDataError);
    }
}

export function* moviesSaga() {
    yield call(fetchMoviesHandler);
}