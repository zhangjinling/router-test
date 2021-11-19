import React, { Component } from "react";
import moduleCss from "./Home.Module.scss";
import { Title } from "../styled/Home.styled";
export default class Home extends Component {
  render() {
    return (
      <div>
        Home page
        <Title>../styled/Home.styled</Title>
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
