import { takeEvery, put, call, select } from "redux-saga/effects";
import { nextPage, previousPage, firstPage, lastPage, selectPage, contentType } from "./paginationSlice";
import { selectContentType } from "./paginationSlice";
import {fetchMoviesHandler} from "../../features/movies/moviesSaga";
import {fetchPeopleHandler} from "../../features/people/peopleSaga";

function* fetchPaginationHandler() {
    try {
        const type = yield select(selectContentType);
        
         if (type === null || type === "movies") {
            yield call(fetchMoviesHandler);
        } else if (type === "people") {
            yield call(fetchPeopleHandler);
        };

    } catch (error) {
        console.error('Error in pagination handler:', error);
    }
}

export function* paginationSaga() {
    yield takeEvery(
        [
            contentType.type,
            firstPage.type,
            previousPage.type,
            nextPage.type,
            lastPage.type,
        ],
        fetchPaginationHandler
    );
}