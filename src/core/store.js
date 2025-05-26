import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "../features/people/peopleSlice";
import moviesReducer from "../features/movies/moviesSlice";
import paginationReducer from "../common/Pagination/paginationSlice";
import personRedcer from "../features/people/PersonPage/personSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import searchReducer from "../common/Navigation/Search/searchSlice";
import movieDetailsReducer from "../features/movies/MoviePage/movieDetailsSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        people: peopleReducer,
        person: personRedcer,
        movies: moviesReducer,
        movie: movieDetailsReducer,
        pagination: paginationReducer,
        search: searchReducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);