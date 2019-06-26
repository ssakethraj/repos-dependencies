import { all } from "redux-saga/effects";
import {
  watchFetchReposSaga,
  watchFetchSingleRepoSaga,
  watchFetchRepoContentSaga
} from "./github/sagas";

export default function* rootSaga() {
  yield all([
    watchFetchReposSaga(),
    watchFetchSingleRepoSaga(),
    watchFetchRepoContentSaga()
  ]);
}
