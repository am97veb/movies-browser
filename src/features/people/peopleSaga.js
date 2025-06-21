import { takeEvery, put, call, select, delay } from "redux-saga/effects";
import { showPeople, fetchPeopleError, fetchPeopleSuccess, fetchPeopleLoading } from "./peopleSlice";
import { fetchApiData } from "../../fetchApiData";
import { totalPages, selectPage } from "../../common/Pagination/paginationSlice";
import { loadingTime } from "../../common/loadingTime";
import { API_KEY, API_URL, API_DATA_LANGUAGE } from "../../core/apiData";

export function* fetchPeopleHandler() {
    try {
        yield put(fetchPeopleLoading());
        yield delay(loadingTime);
        const page = yield select(selectPage);
        const sourceApiData = `${API_URL}/person/popular?${API_KEY}${API_DATA_LANGUAGE}&page=${page}`;
        const people = yield call(fetchApiData, sourceApiData);
        yield put(fetchPeopleSuccess(people));
        yield put(totalPages(people));
    } catch (error) {
        yield put(fetchPeopleError());
    }
}

export function* peopleSaga() {
    yield takeEvery(showPeople.type, fetchPeopleHandler);
}