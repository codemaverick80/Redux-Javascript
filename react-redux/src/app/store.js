import { createStore } from "redux";
import cakeReducer from "../features/cake/cakeReducer";
import icecreamReducer from "../features/icecream/icecreamReducer";
import { combineReducers } from "redux";
// const store = createStore(cakeReducer);

const rootReducer = combineReducers({ cakeReducer, icecreamReducer });

const store = createStore(rootReducer);

export default store;
