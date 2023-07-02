import { createStore } from "redux";
import cakeReducer from "../features/cake/cakeReducer";

const store = createStore(cakeReducer);

export default store;
