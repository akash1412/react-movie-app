import { combineReducers } from "redux";

//?REDUCERS
import popularMoviesReducer from "./movies/popular/popular.reducer";
import toggleReducer from "./toggle/toggleReducer";

const rootReducer = combineReducers({
  popularMoviesReducer,
  toggleReducer,
});

export default rootReducer;
