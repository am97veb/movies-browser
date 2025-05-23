import { put, call, select, takeEvery } from "redux-saga/effects";
import { all } from "redux-saga/effects";
import { fetchApiData } from "../../fetchApiData";
import {
  showMovies,
  getMovieDetails,
  fetchDataSuccess,
  fetchMovieDetailsSuccess,
  fetchDataError,
  fetchMovieDetailsError,
  setGenres
} from "./moviesSlice";
import { selectContentType, totalPages, selectPage, contentType } from "../../common/Pagination/paginationSlice";

export function* fetchMoviesHandler() {
  try {
    const type = yield select(selectContentType);
    if (type !== "movies") {
      yield put(contentType("movies"));
    }

    const page = yield select(selectPage);
    const sourceApiData = `https://api.themoviedb.org/3/movie/popular?api_key=6007bf485fd1645cfc7ab81654ba3228&language=en-US&page=${page}`;
    const movies = yield call(fetchApiData, sourceApiData);

    yield put(fetchDataSuccess(movies));
    yield put(totalPages(movies));
    yield call(fetchGenresHandler);
  } catch (error) {
    yield put(fetchDataError());
  }
}

export function* fetchGenresHandler() {
  try {
    const genresApiData = `https://api.themoviedb.org/3/genre/movie/list?api_key=6007bf485fd1645cfc7ab81654ba3228&language=en-US`;
    const genres = yield call(fetchApiData, genresApiData);
    yield put(setGenres(genres.genres));
  } catch (error) {
    yield put(fetchDataError());
  }
}

export function* fetchMovieDetailsHandler({ payload: id }) {
  try {
    const detailsApiData = `https://api.themoviedb.org/3/movie/${id}?api_key=6007bf485fd1645cfc7ab81654ba3228&language=en-US`;
    const creditsApiData = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6007bf485fd1645cfc7ab81654ba3228&language=en-US`;

    const [movieDetails, credits] = yield all([
      call(fetchApiData, detailsApiData),
      call(fetchApiData, creditsApiData),
    ]);

    yield put(fetchMovieDetailsSuccess({
      ...movieDetails,
      cast: credits.cast,
      crew: credits.crew,
    }));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

export function* moviesSaga() {
  yield call(fetchMoviesHandler);
  yield takeEvery(showMovies.type, fetchMoviesHandler);
  yield takeEvery(getMovieDetails.type, fetchMovieDetailsHandler);
}
