import { takeLatest, delay, select, } from "redux-saga/effects";
import { fetchApiData } from "../../../fetchApiData";
import { newSearch, fetchDataSuccess, fetchDataError } from "./searchSlice";
import { call, put } from "redux-saga/effects";
import { totalPages } from "../../Pagination/paginationSlice";
import { selectContentType, selectPage } from "../../Pagination/paginationSlice";
import { selectQuery } from "./searchSlice";
import { API_DATA_LANGUAGE, API_KEY, API_URL } from "../../../core/apiData";

export function* fetchSearchHandler(action = {}) {
    const queryFromState = yield select(selectQuery);

    const query = action.payload?.trimmedValue || queryFromState;
    if (!query) return;
    const page = yield select(selectPage);
    const type = yield select(selectContentType);
    const encodedQuery = encodeURIComponent(query);

    try {
        const sourceApiData = `${API_URL}/search/${type}?${API_KEY}&query=${encodedQuery}&include_adult=false${API_DATA_LANGUAGE}&page=${page}`;

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