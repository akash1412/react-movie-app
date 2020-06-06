import { asyncTVShowsFetch } from "../../API/fetch";

import { PopularOnTV } from "./tv.types";

const fetchPopularOnTvStart = () => ({
  type: PopularOnTV.FETCH_POPULAR_ON_TV_START,
});

const fetchPopularOnTvSuccess = (data) => ({
  type: PopularOnTV.FETCH_POPULAR_ON_TV_SUCCESS,
  payload: data,
});

const fetchPopularOnTvFailure = (error) => ({
  type: PopularOnTV.FETCH_POPULAR_ON_TV_FAILURE,
  payload: error,
});

export const fetchPopularOnTvStartAsync = (pageNo) => async (dispatch) => {
  try {
    dispatch(fetchPopularOnTvStart());

    const popularOnTv = await asyncTVShowsFetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=${pageNo}`
    );

    dispatch(fetchPopularOnTvSuccess(popularOnTv));
  } catch (error) {
    dispatch(fetchPopularOnTvFailure(error.message));
  }
};
