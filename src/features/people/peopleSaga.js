import { takeEvery, put, call, select } from "redux-saga/effects";
import { showPeople, fetchDataError, fetchDataSuccess } from "./peopleSlice";
import { fetchApiData } from "../../fetchApiData";
import { contentType, totalPages, selectPage, selectContentType } from "../../common/Pagination/paginationSlice";

export function* fetchPeopleHandler() {
    try {
        const type = yield select(selectContentType);
        if (type !== "people") {
            yield put(contentType("people"));
        };
        const page = yield select(selectPage);
        const sourceApiData = `https://api.themoviedb.org/3/person/popular?api_key=6007bf485fd1645cfc7ab81654ba3228&language=en-US&page=${page}`;
        const people = yield call(fetchApiData, sourceApiData);
        yield put(fetchDataSuccess(people));
        console.log(people);
        yield put(totalPages(people));
    } catch (error) {
        yield put(fetchDataError());
    }
}

export function* peopleSaga() {
    yield takeEvery(showPeople.type, fetchPeopleHandler);
}