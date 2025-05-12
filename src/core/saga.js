import { all } from "redux-saga/effects";
import { moviesSaga } from "../features/movies/moviesSaga";
import { peopleSaga } from "../features/people/peopleSaga";
import { paginationSaga } from "../common/Pagination/paginationSaga";
import { personSaga } from "../features/people/PersonPage/personSaga";
import { searchSaga } from "../features/people/searchSaga";

export default function* rootSaga() {
    yield all ([
        moviesSaga(),
        peopleSaga(),
        searchSaga(),
        paginationSaga(),
        personSaga(),
    ]);
}