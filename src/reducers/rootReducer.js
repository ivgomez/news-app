import { combineReducers } from "redux";
import category from "./categoryReducer";

export default combineReducers({
  categories: category,
});
