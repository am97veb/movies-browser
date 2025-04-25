import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "../features/people/peopleSlice";
import { peopleSaga } from "../features/people/peopleSaga";
import moviesReducer from "../features/movies/moviesSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        people: peopleReducer,
        movies: moviesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),

});

sagaMiddleware.run(rootSaga);