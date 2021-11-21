import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import { Title } from "../styled/Home.styled";
export default class Messages extends Component {
  render() {
    return (
      <div>
        <p>this is Messages header.</p>
        <div>
          <p>内容显示区域：</p>
          <a className="alink" href="http://baidu.com">
            22222222222222
          </a>
          <Title>styled comments1</Title>
          <Title>styled comments2</Title>
          <Title>styled comments3</Title>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
  }
}
