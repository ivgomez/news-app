import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import category from "./reducers/categoryReducer";

const initialState = {};
const middleWare = [thunkMiddleware];

export const store = createStore(
  category,
  initialState,
  applyMiddleware(...middleWare)
);
