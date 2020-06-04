import { fetchUpcomingMoviesStartAsync } from "./upcoming/upcoming.action";
import { fetchTopratedMoviesStartAsync } from "./top-rated/top-rated.action";
import { fetchPopularMoviesStartAsync } from "./popular/popular.action";

const fetchMoviesStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchPopularMoviesStartAsync());
    dispatch(fetchTopratedMoviesStartAsync());
    dispatch(fetchUpcomingMoviesStartAsync());
  };
};

export default fetchMoviesStartAsync;
