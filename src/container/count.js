import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createIncreaseAction,
  createDecreaseAction,
  createIncreaseAsyncAction,
} from "../redux/actions/count";

class Count extends Component {
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
        <h1>人数：{this.props.personCount}</h1>
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

function mapStateToProps(state) {
  return { count: state.count, personCount: state.persons.length };
}
const mapDispatchToProps = (dispatch) => {
  return {
    increase: (value) => dispatch(createIncreaseAction(value)),
    decrease: (value) => dispatch(createDecreaseAction(value)),
    increaseAsync: (value, time) =>
      dispatch(createIncreaseAsyncAction(value, time)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Count);
