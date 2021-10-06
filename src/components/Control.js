import React, { Component } from "react";

class Control extends Component {
  render() {
    console.log("==>  Control render");
    return (
      <div>
        <div>
          <ul>
            <li>
              <a
                href="/create"
                onClick={function (e) {
                  e.preventDefault();
                  this.props.onChangeMode("create");
                }.bind(this)}
              >
                create
              </a>
            </li>
            <li>
              <a
                href="/update"
                onClick={function (e) {
                  e.preventDefault();
                  this.props.onChangeMode("update");
                }.bind(this)}
              >
                update
              </a>
            </li>

            <li>
              <input
                href="/delete"
                onClick={function (e) {
                  e.preventDefault();
                  this.props.onChangeMode("delete");
                }.bind(this)}
                type="button"
                value="삭제"
              ></input>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Control;
