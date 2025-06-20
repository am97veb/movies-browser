import { put, call, takeEvery, delay, all } from "redux-saga/effects";
import { fetchApiData } from "../../../fetchApiData";
import {
  getMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  fetchMovieDetailsLoading,
} from "./movieDetailsSlice";
import { loadingTime } from "../../../common/loadingTime";
import { API_URL, API_KEY, API_DATA_LANGUAGE } from "../../../core/apiData";

export function* fetchMovieDetailsHandler({ payload: id }) {
  try {
    yield put(fetchMovieDetailsLoading());
    yield delay(loadingTime);
    const detailsApiData = `${API_URL}/movie/${id}?${API_KEY}${API_DATA_LANGUAGE}`;
    const creditsApiData = `${API_URL}/movie/${id}/credits?${API_KEY}${API_DATA_LANGUAGE}`;

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

export function* movieDetailsSaga() {
  yield takeEvery(getMovieDetails.type, fetchMovieDetailsHandler);
}