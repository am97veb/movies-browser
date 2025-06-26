import { takeLatest, delay, select, } from "redux-saga/effects";
import { fetchApiData } from "../../../fetchApiData";
import { newSearch, fetchDataLoading, fetchDataSuccess, fetchDataError, clearSearch } from "./searchSlice";
import { call, put } from "redux-saga/effects";
import { totalPages } from "../../Pagination/paginationSlice";
import { selectContentType, selectPage } from "../../Pagination/paginationSlice";
import { selectQuery } from "./searchSlice";
import { API_DATA_LANGUAGE, API_KEY, API_URL } from "../../../core/apiData";
import { fetchGenresHandler } from "../../../features/movies/moviesSaga";
import { loadingTime } from "../../loadingTime";

export function* fetchSearchHandler(action = {}) {
    const queryFromState = yield select(selectQuery);

    const query = action.payload?.trimmedValue || queryFromState;
    if (!query) return;
    const page = yield select(selectPage);
    const contentType = yield select(selectContentType);

    const type = contentType === "searchedMovies" ? "movie"
               : contentType === "searchedPeople" ? "person"
               : undefined

    const encodedQuery = encodeURIComponent(query);

    try {
        yield put(fetchDataLoading());
        yield delay(loadingTime);
        const sourceApiData = `${API_URL}/search/${type}?${API_KEY}&query=${encodedQuery}&include_adult=false${API_DATA_LANGUAGE}&page=${page}`;

        if (type === "movie") {
            yield call(fetchGenresHandler)
        };
        
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