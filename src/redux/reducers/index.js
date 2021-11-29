import { combineReducers } from "redux";
import countReducer from "./count";
import personReducer from "./persion";
export default combineReducers({
  count: countReducer,
  persons: personReducer,
});
