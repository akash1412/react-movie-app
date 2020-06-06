import { asyncTVShowsFetch } from "../../API/fetch";

import { PopularOnTV, LatestOnTv, TopRatedOnTv } from "./tv.types";

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

///////////////////////////////////
//*LATEST_ON_TV

const fetchLatestOnTvStart = () => ({
  type: LatestOnTv.FETCH_LATEST_ON_TV_START,
});

const fetchLatestOnTvSuccess = (data) => ({
  type: LatestOnTv.FETCH_LATEST_ON_TV_SUCCESS,
  payload: data,
});

const fetchLatestOnTvFailure = (error) => ({
  type: LatestOnTv.FETCH_POPULAR_ON_TV_FAILURE,
  payload: error,
});

export const fetchLatestOnTvStartAsync = () => async (dispatch) => {
  try {
    dispatch(fetchLatestOnTvStart());

    const latestOnTv = await asyncTVShowsFetch(
      "https://api.themoviedb.org/3/tv/latest?api_key=7f9064828b08b49a74ff8900e1c2bf5d&language=en-US"
    );

    dispatch(fetchLatestOnTvSuccess(latestOnTv));
  } catch (error) {
    dispatch(fetchLatestOnTvFailure(error.message));
  }
};

//////////////////////////////////////////////////////////////////
//*TOP_RATED_ON_TV

const fetchTopRatedOnTvStart = () => ({
  type: TopRatedOnTv.FETCH_TOP_RATED_ON_TV_START,
});

const fetchTopRatedOnTvSuccess = (data) => ({
  type: TopRatedOnTv.FETCH_TOP_RATED_ON_TV_SUCCESS,
  payload: data,
});

const fetchTopRatedOnTvFailure = (error) => ({
  type: TopRatedOnTv.FETCH_TOP_RATED_ON_TV_FAILURE,
  payload: error,
});

export const fetchTopRatedOnTvStartAsync = (pageNo) => async (dispatch) => {
  try {
    dispatch(fetchTopRatedOnTvStart());

    const topRatedOnTv = await asyncTVShowsFetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=7f9064828b08b49a74ff8900e1c2bf5d&language=en-US&page=${pageNo}`
    );
    dispatch(topRatedOnTv);
  } catch (error) {
    dispatch(fetchTopRatedOnTvFailure(error.message));
  }
};
