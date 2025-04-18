import { takeEvery, put, call } from "redux-saga/effects";
import { showPeople, fetchDataError, fetchDataSuccess } from "./peopleSlice";
import { fetchApiData } from "../../fetchApiData";

function* fetchPeopleHandler() {
    try {
        const peopleData = yield call(fetchApiData);
        yield put(fetchDataSuccess(peopleData));
    } catch (error) {
        yield put(fetchDataError());
    }
}

export function* peopleSaga() {
    yield takeEvery(showPeople.type, fetchPeopleHandler);
}