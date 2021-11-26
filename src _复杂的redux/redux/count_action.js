import {INCREASE,DECREASE} from './count_constant'

export const createIncreaseAction = (data) => ({type:INCREASE,data})
export const createDecreaseAction = (data) => ({type:DECREASE,data})
export const createIncreaseAsyncAction = (data, time) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(createIncreaseAction(data ))
    }, time)
  }
}