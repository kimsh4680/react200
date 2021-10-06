import React, { Component } from "react";

class UpdataContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    };
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(this.props.data);
    console.log("==>  UpdataContent render");
    return (
      <div>
        <article>
          <h2>Updata</h2>
          <form
            action="/Updata_process"
            method="post"
            onSubmit={function (e) {
              e.preventDefault();
              this.props.onSubmit(
                this.state.id,
                this.state.title,
                this.state.desc
              );
            }.bind(this)}
          >
            <input type="hidden" name="id" value={this.state.id}></input>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.inputFormHandler}
            />
            <br />
            <textarea
              name="desc"
              value={this.state.desc}
              onChange={this.inputFormHandler}
            />
            <input type="submit" value="저장" />
          </form>
        </article>
      </div>
    );
  }
}
export default UpdataContent;
