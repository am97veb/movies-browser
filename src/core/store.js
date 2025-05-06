import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "../features/people/peopleSlice";
import moviesReducer from "../features/movies/moviesSlice";
import paginationReducer from "../common/Pagination/paginationSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        people: peopleReducer,
        movies: moviesReducer,
        pagination: paginationReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),

});

sagaMiddleware.run(rootSaga);