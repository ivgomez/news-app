import { types } from "./types";
import {
  searchByCategory,
  searchByDate,
  searchByQuery,
} from "../services/services";

export const setLoading = (isLoading) => {
  return {
    type: types.SET_LOADING,
    payload: isLoading,
  };
};

export const getNewsByCategory = (category) => async (dispatch) => {
  dispatch(setLoading(true));
  const news = await searchByCategory(category);
  dispatch({ type: types.GET_BY_CATEGORY, payload: news });
};

export const getNewsByDate = (date) => async (dispatch) => {
  dispatch(setLoading(true));
  const news = await searchByDate(date);
  dispatch({ type: types.GET_NEWS_BY_DATE, payload: news });
};

export const getNewsByQuery = (query) => async (dispatch) => {
  dispatch(setLoading(true));
  const news = await searchByQuery(query);
  dispatch({ type: types.GET_NEWS_BY_QUERY, payload: news });
};
