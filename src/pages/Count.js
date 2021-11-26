import React, { Component } from "react";
export default class Count extends Component {
  increase = () => {
    const { value } = this.selectNumber;
    // this.setState({count:this.state.count + value * 1})
    // store.dispatch(createIncreaseAction(value * 1));
    this.props.increase(value * 1);
  };
  decrease = () => {
    const { value } = this.selectNumber;
    // this.setState({count:this.state.count - value * 1})
    // store.dispatch(createDecreaseAction(value * 1));
    this.props.decrease(value * 1);
  };
  increaseOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      // store.dispatch(createIncreaseAction(value * 1));
      this.props.increase(value * 1);
    }
  };
  increaseAsync = () => {
    const { value } = this.selectNumber;
    // store.dispatch(createIncreaseAsyncAction(value * 1, 3000));
    this.props.increaseAsync(value * 1, 3000);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>和是：{this.props.count}</h1>
        <div>
          <select ref={(c) => (this.selectNumber = c)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
          <button onClick={this.increaseOdd}>奇数相加</button>
          <button onClick={this.increaseAsync}>异步相加</button>
        </div>
      </div>
    );
  }
}
