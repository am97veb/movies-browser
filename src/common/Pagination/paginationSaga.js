import { takeEvery, put, call, select } from "redux-saga/effects";
import { nextPage, previousPage, firstPage, lastPage, selectPage, contentType } from "./paginationSlice";
import { selectContentType } from "./paginationSlice";
import { fetchMoviesHandler } from "../../features/movies/moviesSaga";
import { fetchPeopleHandler } from "../../features/people/peopleSaga";
import { fetchSearchHandler } from "../Navigation/Search/searchSaga";
import { fetchMovieDetailsHandler } from "../../features/movies/MoviePage/movieDetailsSaga";
import { fetchPersonHandler } from "../../features/people/PersonPage/personSaga";

function* fetchPaginationHandler() {
    try {
        const type = yield select(selectContentType);
        
        if (type === "movies") {
            yield call(fetchMoviesHandler);
        } else if (type === "people") {
            yield call(fetchPeopleHandler);
        } else if (type === "searchedMovies" || type === "searchedPeople") {
            yield call(fetchSearchHandler);
        } else if (type === "movie") {
            yield call(fetchMovieDetailsHandler);
        } else if (type === "person" ) {
            yield call(fetchPersonHandler);
        };
    } catch (error) {
        console.error('Error in pagination handler:', error);
    }
}

export function* paginationSaga() {
    yield call(fetchPaginationHandler)
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