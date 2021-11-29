import React, { Component } from "react";
import { createAddPersonAction } from "../../redux/actions/person";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
class Persons extends Component {
  nameNode = React.createRef();
  ageNode = React.createRef();
  add = () => {
    const name = this.nameNode.current.value;
    const age = this.ageNode.current.value;
    this.props.addPersion({ id: nanoid(), name, age });
  };
  render() {
    return (
      <div>
        <h3>{this.props.persons.length}</h3>
        <div>
          <input ref={this.nameNode} type="text" placeholder="姓名" />
          <input ref={this.ageNode} type="text" placeholder="年龄" />
          <button onClick={this.add}>添加</button>
        </div>
        <ul>
          {this.props.persons.map((value) => {
            return (
              <li key={value.id}>
                {value.name} --- {value.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { persons: state.persons };
}
function mapDispatchToProps(dispatch) {
  return {
    addPersion: (data) => dispatch(createAddPersonAction(data)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Persons);
