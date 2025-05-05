import { takeEvery, put, call, select } from "redux-saga/effects";
import { showPeople, fetchDataError, fetchDataSuccess, selectPage, nextPage, previousPage, firstPage, lastPage } from "./peopleSlice";
import { fetchPeopleData } from "../../fetchPeopleData";

function* fetchPeopleHandler() {
    try {
        const page = yield select(selectPage);
        const sourceApiData = `moviesSource${page}.json`;
        const people = yield call(fetchPeopleData, sourceApiData);
        yield put(fetchDataSuccess(people));
    } catch (error) {
        yield put(fetchDataError());
    }
}

export function* peopleSaga() {
    yield takeEvery(
        [
            showPeople.type,
            firstPage.type,
            previousPage.type,
            nextPage.type,
            lastPage.type,
        ],
        fetchPeopleHandler
    );
}