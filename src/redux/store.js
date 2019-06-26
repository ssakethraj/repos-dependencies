import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
import rootSaga from "./sagas";
// import {
//   watchFetchReposSaga,
//   watchFetchSingleRepoSaga,
//   watchFetchRepoContentSaga
// } from "./github/sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk, sagaMiddleware];

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
