import { NOW_PLAYING_MOVIES } from "../movie.types";

const INITIAL_STATE = {
  loading: false,
  data: [],
  totalPages: null,
  totalResults: null,
  errorMessgae: null,
};

const nowPlayingMovieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOW_PLAYING_MOVIES.FETCH_NOW_PLAYING_MOVIE_START:
      return {
        ...state,
        loading: true,
      };
    case NOW_PLAYING_MOVIES.FETCH_NOW_PLAYING_MOVIE_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        totalResults: action.payload.total_results,
        totalPages: action.payload.total_pages,
        loading: false,
      };

    case NOW_PLAYING_MOVIES.FETCH_NOW_PLAYING_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessgae: action.payload,
      };

    default:
      return state;
  }
};

export default nowPlayingMovieReducer;
