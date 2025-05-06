import { all } from "redux-saga/effects";
import { moviesSaga } from "../features/movies/moviesSaga";
import { peopleSaga } from "../features/people/peopleSaga";
import { paginationSaga } from "../common/Pagination/paginationSaga";

export default function* rootSaga() {
    yield all ([
        moviesSaga(),
        peopleSaga(),
        paginationSaga(),
    ]);
}