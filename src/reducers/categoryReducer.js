import { types } from "../actions/types";

const initialState = {
  news: [],
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BY_CATEGORY:
      return {
        ...state,
        news: action.payload,
        isLoading: false,
      };
    case types.GET_NEWS_BY_DATE:
      return {
        ...state,
        news: action.payload,
        isLoading: false,
      };
    case types.GET_NEWS_BY_QUERY:
      return {
        ...state,
        news: action.payload,
        isLoading: false,
      };
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
