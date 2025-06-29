import { put, call, select, takeEvery, delay, fork } from "redux-saga/effects";
import { fetchApiData } from "../../fetchApiData";
import {
  showMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  setGenres,
  fetchMoviesLoading,
} from "./moviesSlice";
import { totalPages, selectPage, contentType, selectContentType } from "../../common/Pagination/paginationSlice";
import { loadingTime } from "../../common/loadingTime"
import { API_DATA_LANGUAGE, API_KEY, API_URL } from "../../core/apiData";

export function* fetchMoviesHandler() {
  try {
    yield put(fetchMoviesLoading());
    const currentContentType  = yield select(selectContentType);
    if (currentContentType  !== "movies") {
      yield put(contentType("movies"))
    }
    yield delay(loadingTime);
    const page = yield select(selectPage); 
    const sourceApiData = `${API_URL}/movie/popular?${API_KEY}${API_DATA_LANGUAGE}&page=${page}`;
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
    const genresApiData = `${API_URL}/genre/movie/list?${API_KEY}${API_DATA_LANGUAGE}`;
    const genres = yield call(fetchApiData, genresApiData);
    yield put(setGenres(genres.genres));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeEvery(showMovies.type, fetchMoviesHandler);
}