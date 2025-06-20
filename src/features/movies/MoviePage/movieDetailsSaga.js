import { put, call, takeEvery, delay, all } from "redux-saga/effects";
import { fetchApiData } from "../../../fetchApiData";
import {
  getMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  fetchMovieDetailsLoading,
} from "./movieDetailsSlice";
import { delayTime } from "../../../common/delayTime";

export function* fetchMovieDetailsHandler({ payload: id }) {
  try {
    yield put(fetchMovieDetailsLoading());
    yield delay(delayTime);
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

export function* movieDetailsSaga() {
  yield takeEvery(getMovieDetails.type, fetchMovieDetailsHandler);
}