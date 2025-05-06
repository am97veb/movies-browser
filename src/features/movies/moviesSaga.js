import { put, call, select, takeEvery } from "redux-saga/effects";
import { fetchApiData } from "../../fetchApiData";
import { showMovies, fetchDataError, fetchDataSuccess } from "./moviesSlice";
import { selectContentType, totalPages, selectPage, contentType } from "../../common/Pagination/paginationSlice";

export function* fetchMoviesHandler() {
    try {
        const type = yield select(selectContentType);
                if (type !== "movies") {
                    yield put(contentType("movies"));
                };
        const page = yield select(selectPage);
        const sourceApiData = `https://api.themoviedb.org/3/movie/popular?api_key=6007bf485fd1645cfc7ab81654ba3228&language=en-US&page=${page}`;
        const movies = yield call(fetchApiData, sourceApiData);
        yield put(fetchDataSuccess(movies));
        yield put(totalPages(movies));
        
    } catch (error) {
        yield put(fetchDataError());
    }
}

export function* moviesSaga() {
    yield call(fetchMoviesHandler);
    yield takeEvery(showMovies.type, fetchMoviesHandler)
}