import { takeEvery, put } from "redux-saga/effects";
import { actions, fetchStarted, fetchSuccess, fetchFailure } from "./actions";

export function* watchFetchReposSaga() {
  yield takeEvery(actions.FETCH_REPOS, fetchReposSaga);
}

function* fetchReposSaga() {
  yield put(fetchStarted(actions.FETCH_REPOS));
  try {
    const response = yield fetch("https://api.github.com/repositories");
    const repos = yield response.json();
    yield put(fetchSuccess(actions.FETCH_REPOS, repos));
  } catch (err) {
    console.log("ERRor: ", err);
    yield put(fetchFailure(actions.FETCH_REPOS));
  }
}

export function* watchFetchSingleRepoSaga() {
  yield takeEvery(actions.FETCH_REPO, fetchSingleRepoSaga);
}

function* fetchSingleRepoSaga({ owner, repo }) {
  console.log("Repodsf, ", repo, owner);

  yield put(fetchStarted(actions.FETCH_REPO));
  try {
    const response = yield fetch(
      `https://api.github.com/repos/${owner}/${repo}`
    );
    const repository = yield response.json();
    yield put(fetchSuccess(actions.FETCH_REPO, repository));
  } catch (err) {
    console.log("ERRor: ", err);
    yield put(fetchFailure(actions.FETCH_REPO));
  }
}

export function* watchFetchRepoContentSaga() {
  yield takeEvery(actions.FETCH_CONTENT, fetchRepoContentSaga);
}

function* fetchRepoContentSaga({ owner, repo }) {
  yield put(fetchStarted(actions.FETCH_CONTENT));
  try {
    const response = yield fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/package.json`
    );
    const content = yield response.json();
    yield put(fetchSuccess(actions.FETCH_CONTENT, content));
  } catch (err) {
    console.log("ERRor: ", err);
    yield put(fetchFailure(actions.FETCH_CONTENT));
  }
}
