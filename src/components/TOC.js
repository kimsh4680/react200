import React, { Component } from "react";
import Control from "./Control";

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log(
      "==> toc render shouldComponentUpdate",
      newProps.data,
      newState
    );
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
  }
  render() {
    console.log("==>  toc render");
    var lists = [];
    var data = this.props.data;
    var i = 0;
    //  while( i <data.length)

    for (var i = 0; i < data.length; i++) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
    }
    return (
      <div>
        <nav>
          <div className="loginpart">로그인 창</div>
          <ul>{lists}</ul>

          <Control />
        </nav>
      </div>
    );
  }
}

export default TOC;
