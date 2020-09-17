import { asyncFetch } from "../../API/fetch";

import { TRENDING } from "./trending.types";

const fetchTrendingStart = () => ({
  type: TRENDING.FETCH_TRENDING_START,
});

const fetchTrendingSuccess = (data) => ({
  type: TRENDING.FETCH_TRENDING_SUCCESS,
  payload: data,
});

const fetchTrendingFailure = (error) => ({
  type: TRENDING.FETCH_TRENDING_FAILURE,
  payload: error,
});

export const fetchTrendingStartAsync = () => async (dispatch) => {
  try {
    dispatch(fetchTrendingStart());

    const fetch = await asyncFetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>>`
    );

    dispatch(fetchTrendingSuccess(fetch));
  } catch (error) {
    dispatch(fetchTrendingFailure(error.message));
  }
};
