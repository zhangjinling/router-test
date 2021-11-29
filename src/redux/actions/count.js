import { INCREASE, DECREASE } from "../constants";

export const createIncreaseAction = (data) => ({ type: INCREASE, data });
export const createDecreaseAction = (data) => ({ type: DECREASE, data });
export const createIncreaseAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncreaseAction(data));
    }, time);
  };
};
