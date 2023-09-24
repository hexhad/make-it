import { applyMiddleware, combineReducers, createStore } from "redux";
import dummy from "./reducers/MainReducer";
import thunk from "redux-thunk";
import { logger } from "redux-logger/src";


const rootReducer = combineReducers({
  dummy
});

export const store = createStore(rootReducer,applyMiddleware(...[thunk,logger]));
