import { takeLatest, delay, select, } from "redux-saga/effects";
import { fetchApiData } from "../../../fetchApiData";
import { newSearch, fetchDataSuccess, fetchDataError } from "./searchSlice";
import { call, put } from "redux-saga/effects";
import { totalPages } from "../../Pagination/paginationSlice";
import { selectContentType, selectPage } from "../../Pagination/paginationSlice";
import { selectQuery } from "./searchSlice";

export function* fetchSearchHandler(action = {}) {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY_PERSON_SEARCH;
    const queryFromState = yield select(selectQuery);

    const query = action.payload?.trimmedValue || queryFromState;
    if (!query) return;
    const page = yield select(selectPage);
    const type = yield select(selectContentType);
    const encodedQuery = encodeURIComponent(query);

    try {

        const sourceApiData = `https://api.themoviedb.org/3/search/`
            + `${type}`
            + `?api_key=${apiKey}`
            + `&query=${encodedQuery}`
            + `&include_adult=false`
            + `&language=en-US`
            + `&page=${page}`;

        const searchResults = yield call(fetchApiData, sourceApiData);
        if (page === 1) {
            yield delay(1000);
        }
        yield put(fetchDataSuccess(searchResults));

        yield put(totalPages(searchResults));

    } catch (error) {
        yield put(fetchDataError());
    }
}

export function* searchSaga() {
    yield takeLatest(newSearch.type, fetchSearchHandler);
}