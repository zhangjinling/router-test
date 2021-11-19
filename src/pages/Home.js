import React, { Component } from "react";
import moduleCss from "./Home.Module.scss";

export default class Home extends Component {
  render() {
    return (
      <div>
        Home page
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
