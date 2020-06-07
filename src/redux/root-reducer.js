import { combineReducers } from "redux";

//?REDUCERS
import popularMoviesReducer from "./movies/popular/popular.reducer";
import upcomingMoviesReducer from "./movies/upcoming/upcoming.reducer";
import topRatedMoviesReducer from "./movies/top-rated/top-rated.reducer";
import discoverMovieReducer from "./movies/discover/discover.reducer";
import toggleReducer from "./toggle/toggleReducer";
import popularOnTvReducer from "./tv/popular/popular.reducer";
import latestOnTvReducer from "./tv/latest/latest.reducer";
import topRatedOnTvReducer from "./tv/top-rated/top-rated.reducer";
import onAirOnTvReducer from "./tv/on-air/on-air.reducer";

const rootReducer = combineReducers({
  popularMoviesReducer,
  upcomingMoviesReducer,
  topRatedMoviesReducer,
  discoverMovieReducer,
  toggleReducer,
  popularOnTvReducer,
  latestOnTvReducer,
  topRatedOnTvReducer,
  onAirOnTvReducer,
});

export default rootReducer;
