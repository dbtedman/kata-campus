import { takeEvery } from "redux-saga/effects";
import { SOME_ACTION } from "../action";

function* doSomething() {
    // Intentionally empty
}

export function* mySaga() {
    yield takeEvery(SOME_ACTION, doSomething);
}
