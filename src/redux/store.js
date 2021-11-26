import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import increase from "./count_reducers";

// const allReducer = combineReducers({
//   count:countReducer,
//   persons:personReducer
// })

export default createStore(increase, applyMiddleware(thunk));
