import { combineReducers } from 'redux';

//?REDUCERS
//?MOVIE REDUCERS
import movieReducer from './movies/movie.reducer';

// import popularReducer from './popular/popular.reducer';
// import trendingReducer from './trending/trending.reducer';
// import topRatedReducer from './top-rated/top-rated.reducer';
// import upcomingReducer from './upcoming/upcoming.reducer';
import searchReducer from './search/search.reducer';
import genreReducer from './genre/genre.reducer';
import recommendReducer from './recommendation/recommend.reducer';

//?Toggle Reducer
import toggleReducer from './toggle/toggleReducer';

import detailReducer from './detail/detail.reducer';

const rootReducer = combineReducers({
  recommendReducer,
  movieReducer,
  genreReducer,
  searchReducer,
  detailReducer,
  toggleReducer,
});

export default rootReducer;
