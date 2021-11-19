import React, { Component } from "react";
import moduleCss from "./Home.Module.scss";
import { Title } from "../styled/Home.styled";
export default class Home extends Component {
  myAlert = (str) => {
    alert(str);
  };
  a = 1111;
  render() {
    return (
      <div>
        Home page
        <Title>
          ../styled/Home.styled
          <p className="name">title 下的 name</p>
          <span
            className="item"
            onClick={() => {
              this.myAlert(this.a);
            }}
          >
            1={this.a}
          </span>
          <span className="item">2</span>
          <span className="item">3</span>
          <span className="item">4</span>
          <span className="item">5</span>
          <span className="item">6</span>
        </Title>
        <a className={moduleCss.alink} href="http://baidu.com">
          aaaaa
        </a>
        <div className={moduleCss.list}>
          <div>
            111<span className={moduleCss.edit}>edit</span>
          </div>
          <div>
            222<span className="edit">edit</span>
          </div>
          <div>
            333<span className="edit">edit</span>
          </div>
        </div>
      </div>
    );
  }
}
