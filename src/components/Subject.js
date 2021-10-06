import React, { Component } from "react";

class Subject extends Component {
  render() {
    console.log("==>  Subject render");
    return (
      <div>
        <header>
          <h1>
            <a
              href="/"
              onClick={function (e) {
                e.preventDefault();
                this.props.onChangePage();
              }.bind(this)}
            >
              {this.props.title}
            </a>
          </h1>
          <p>{this.props.sub}</p>
        </header>
      </div>
    );
  }
}

export default Subject;
