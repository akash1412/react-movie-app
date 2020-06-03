import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";
import rootReducer from "./root-reducer";

const middleware = [reduxThunk, reduxLogger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
