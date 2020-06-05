import { combineReducers } from "redux";

//?REDUCERS
import popularMoviesReducer from "./movies/popular/popular.reducer";
import upcomingMoviesReducer from "./movies/upcoming/upcoming.reducer";
import topRatedMoviesReducer from "./movies/top-rated/top-rated.reducer";
import discoverMovieReducer from "./movies/discover/discover.reducer";
import toggleReducer from "./toggle/toggleReducer";

const rootReducer = combineReducers({
  popularMoviesReducer,
  upcomingMoviesReducer,
  topRatedMoviesReducer,
  discoverMovieReducer,
  toggleReducer,
});

export default rootReducer;
