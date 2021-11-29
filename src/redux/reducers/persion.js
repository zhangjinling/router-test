import { ADD_PERSON } from "../constants";
const initPerson = [];
export default function personReducer(pre = initPerson, action) {
  switch (action.type) {
    case ADD_PERSON:
      return [action.data, ...pre];
    default:
      return pre;
  }
}
