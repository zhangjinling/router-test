import {INCREASE,DECREASE} from './count_constant'
const initCount = 110
export default function increase(pre = initCount,action){
  switch (action.type) {
    case INCREASE:
      return pre + action.data
    case DECREASE:
        return pre - action.data
    default:
      return pre
  }
}