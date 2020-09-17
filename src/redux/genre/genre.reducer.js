import GENRE from './genre.type';

const INITIAL_STATE = {
  loading: false,
  data: [],
  totalPages: null,
  page: null,
  errorMessage: null,
};

const genreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GENRE.FETCH_GENRE_START:
      return {
        ...state,
        loading: true,
      };
    case GENRE.FETCH_GENRE_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        totalPages: action.payload.total_pages,
        page: action.payload.page,
        loading: false,
      };

    case GENRE.FETCH_GENRE_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default genreReducer;
