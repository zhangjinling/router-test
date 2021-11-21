import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import increase from './count_reducers'
export default createStore(increase,applyMiddleware(thunk))
