import { combineReducers } from "redux";

//?REDUCERS
import popularMoviesReducer from "./movies/popular/popular.reducer";
import upcomingMoviesReducer from "./movies/upcoming/upcoming.reducer";
import topRatedMovies from "./movies/top-rated/top-rated.reducer";
import toggleReducer from "./toggle/toggleReducer";

const rootReducer = combineReducers({
  popularMoviesReducer,
  upcomingMoviesReducer,
  topRatedMovies,
  toggleReducer,
});

export default rootReducer;
