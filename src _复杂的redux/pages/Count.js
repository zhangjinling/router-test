import React, { Component } from 'react'
import store from '../redux/store'
import {createIncreaseAction,
  createDecreaseAction,
createIncreaseAsyncAction} from '../redux/count_action'
export default class Count extends Component {
  state = {count:0}
  componentDidMount(){
    store.subscribe(() => {
      this.setState({})
    })
  }


  increase = () => {
    const {value } = this.selectNumber
    // this.setState({count:this.state.count + value * 1})
    store.dispatch(createIncreaseAction(value * 1))
  }
  decrease = () => {
    const {value } = this.selectNumber
    // this.setState({count:this.state.count - value * 1})
    store.dispatch(createDecreaseAction(value * 1))
  }
  increaseOdd = () => {
    const {value } = this.selectNumber
    if (store.getState() % 2 !== 0){
      store.dispatch(createIncreaseAction(value * 1))
    }
  }
  increaseAsync = () => {
    const {value } = this.selectNumber
    store.dispatch(createIncreaseAsyncAction(value * 1,3000))
  }
  render() {
    return (
      <div>
        <h1>和是：{store.getState()}</h1>
        <div>
          <select ref={c => this.selectNumber = c}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
          <button onClick={this.increaseOdd}>奇数相加</button>
          <button onClick={this.increaseAsync}>异步相加</button>
        </div>
      </div>
    )
  }
}
