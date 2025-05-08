import { takeEvery, takeLatest, delay, select, } from "redux-saga/effects";
import { fetchApiData } from "../../fetchApiData";
import { newSearch, fetchDataSuccess, fetchDataError, selectQuery } from "./personSlice";
import { call, put } from "redux-saga/effects";
import { totalPages } from "../../common/Pagination/paginationSlice";
import { selectContentType, contentType, selectPage } from "../../common/Pagination/paginationSlice";
import { firstPage, nextPage, previousPage, lastPage } from "../../common/Pagination/paginationSlice";

export function* fetchPersonHandler(action) {

    const apiKey = process.env.REACT_APP_TMDB_API_KEY_PERSON_SEARCH;

    try {
        yield delay(1000);

        const query = yield select(selectQuery) || "";

        const type = yield select(selectContentType);
        if (type !== "person") {
            yield put(contentType("person"));
        };
        const page = yield select(selectPage);

        const encodedQuery = encodeURIComponent(query);
        const sourceApiData = `https://api.themoviedb.org/3/search/person`
            + `?api_key=${apiKey}`
            + `&query=${encodedQuery}`
            + `&include_adult=false`
            + `&language=en-US`
            + `&page=${page}`;

        console.log(sourceApiData);
        const personSearch = yield call(fetchApiData, sourceApiData);
        yield put(fetchDataSuccess(personSearch));
        console.log(personSearch);
        yield put(totalPages(personSearch));

    } catch (error) {
        yield put(fetchDataError());
    }
}


export function* personSaga() {
    yield takeLatest(
        newSearch.type, fetchPersonHandler);
    yield takeEvery(
        [
            firstPage.type,
            nextPage.type,
            previousPage.type,
            lastPage.type,
        ],
        fetchPersonHandler
    );
}