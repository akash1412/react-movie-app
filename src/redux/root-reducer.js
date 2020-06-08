import { combineReducers } from "redux";

//?REDUCERS
//?MOVIE REDUCERS
import upcomingMoviesReducer from "./movies/upcoming/upcoming.reducer";
import trendingMoviesReducer from "./movies/trending/trending.reducer";
import topRatedMoviesReducer from "./movies/top-rated/top-rated.reducer";
import popularMoviesReducer from "./movies/popular/popular.reducer";
import nowPlayingMoviesRedcuer from "./movies/now-playing/now-playing.reducer";
import discoverMovieReducer from "./movies/discover/discover.reducer";

//?Toggle Reducer
import toggleReducer from "./toggle/toggleReducer";

//?tv Reducer
import popularOnTvReducer from "./tv/popular/popular.reducer";
import latestOnTvReducer from "./tv/latest/latest.reducer";
import topRatedOnTvReducer from "./tv/top-rated/top-rated.reducer";
import onAirOnTvReducer from "./tv/on-air/on-air.reducer";

const rootReducer = combineReducers({
  upcomingMoviesReducer,
  trendingMoviesReducer,
  topRatedMoviesReducer,
  popularMoviesReducer,
  nowPlayingMoviesRedcuer,
  discoverMovieReducer,
  toggleReducer,
  popularOnTvReducer,
  latestOnTvReducer,
  topRatedOnTvReducer,
  onAirOnTvReducer,
});

export default rootReducer;
