import { put, call, select, takeEvery, delay, fork } from "redux-saga/effects";
import { fetchApiData } from "../../fetchApiData";
import {
  showMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  setGenres,
  fetchMoviesLoading,
} from "./moviesSlice";
import { selectContentType, totalPages, selectPage, contentType } from "../../common/Pagination/paginationSlice";
import { delayTime } from "../../common/delayTime"

export function* fetchMoviesHandler() {
  try {
    yield put(fetchMoviesLoading());
    yield delay(delayTime);
    const page = yield select(selectPage);
    const sourceApiData = `https://api.themoviedb.org/3/movie/popular?api_key=6007bf485fd1645cfc7ab81654ba3228&language=en-US&page=${page}`;
    const movies = yield call(fetchApiData, sourceApiData);

    yield put(fetchMoviesSuccess(movies));
    yield put(totalPages(movies));
    yield call(fetchGenresHandler);
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* fetchGenresHandler() {
  try {
    const genresApiData = `https://api.themoviedb.org/3/genre/movie/list?api_key=6007bf485fd1645cfc7ab81654ba3228&language=en-US`;
    const genres = yield call(fetchApiData, genresApiData);
    yield put(setGenres(genres.genres));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeEvery(showMovies.type, fetchMoviesHandler);
}