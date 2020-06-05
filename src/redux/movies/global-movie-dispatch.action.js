import { fetchUpcomingMoviesStartAsync } from "./upcoming/upcoming.action";
import { fetchTopratedMoviesStartAsync } from "./top-rated/top-rated.action";
import { fetchPopularMoviesStartAsync } from "./popular/popular.action";

const fetchMoviesStartAsync = (page) => {
  return (dispatch) => {
    dispatch(fetchPopularMoviesStartAsync(page));
    dispatch(fetchTopratedMoviesStartAsync(page));
    dispatch(fetchUpcomingMoviesStartAsync(page));
  };
};

export default fetchMoviesStartAsync;
