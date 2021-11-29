import { INCREASE, DECREASE } from "../constants";
const initCount = 110;
export default function countReducer(pre = initCount, action) {
  switch (action.type) {
    case INCREASE:
      return pre + action.data;
    case DECREASE:
      return pre - action.data;
    default:
      return pre;
  }
}
