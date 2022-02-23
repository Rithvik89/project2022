import { all, call } from "redux-saga/effects";
import getNewsSaga from "./sagas/news";
import { authSaga } from "./sagas/Auth";

export default function* rootSaga(){
    yield all([
        call(getNewsSaga),
        call(authSaga)
    ])
}