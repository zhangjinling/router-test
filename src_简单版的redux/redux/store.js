import {createStore} from 'redux'
import increase from './reducers/count_reducers'
export default createStore(increase)
// export default store