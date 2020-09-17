import axios from 'axios';

import RECOMMEND from './recommend.type';

const fetchRecommendStart = () => ({
  type: RECOMMEND.FETCH_RECOMMEND_START,
});

const fetchRecommendSuccess = (data) => ({
  type: RECOMMEND.FETCH_RECOMMEND_SUCCESS,
  payload: data,
});

const fetchRecommendFailure = (error) => ({
  type: RECOMMEND.FETCH_RECOMMEND_FAILURE,
  payload: error,
});

export const fetchRecommendStartAsync = (id, page = 1) => {
  return async (dispatch) => {
    try {
      dispatch(fetchRecommendStart());
      console.log(page);
      const recommendedmovies = await axios(`
        https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=7f9064828b08b49a74ff8900e1c2bf5d&language=en-US&page=${page}`);

      dispatch(fetchRecommendSuccess(recommendedmovies.data));
    } catch (error) {
      dispatch(fetchRecommendFailure(error.message));
    }
  };
};
