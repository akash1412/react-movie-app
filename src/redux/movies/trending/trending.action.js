import { asyncFetch } from "../../../API/fetch";

import { TRENDING_MOVIES } from "./trending.type";

const fetchTrendingMovieStart = () => ({
  type: TRENDING_MOVIES.FETCH_TRENDING_MOVIE_START,
});

const fetchTrendingMovieSuccess = (trendingMovies) => ({
  type: TRENDING_MOVIES.FETCH_TRENDING_MOVIE_SUCCESS,
  payload: trendingMovies,
});

const fetchTrendingMovieFailure = (error) => ({
  type: TRENDING_MOVIES.FETCH_TRENDING_MOVIE_FAILURE,
  payload: error,
});

// const fetchTrendingMovieStartAsync=()=>{

// return async (dispatch)=>{
//   try {
//     dispatch(fetchTrendingMovieStart());

//     const movies = await asyncFetch(
//       "https://api.themoviedb.org/3/movie/all/day?api_key=<<api_key>>"
//     );

//     movies.forEach((movie) => {
//       movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
//     });

//     dispatch(fetchTrendingMovieSuccess(movies)
//   } catch (error) {
//     dispatch(fetchTrendingMovieFailure(error.message))
// }
// }

// }
