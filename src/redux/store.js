import { createStore, applyMiddleware } from "redux";
import createReduxMiddleware from 'redux-saga';
import { rootReducer } from "./reducer";
import { rootSaga } from "../saga/rootSaga";
const sagaMiddleware = createReduxMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
