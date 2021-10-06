import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    console.log("==>  CreateContent render");
    return (
      <div>
        <article>
          <h2>Create</h2>
          <form
            action="/create_process"
            method="post"
            onSubmit={function (e) {
              e.preventDefault();
              this.props.onSubmit(e.target.title.value, e.target.desc.value);
            }.bind(this)}
          >
            <input type="text" name="title" placeholder="text" />
            <br />
            <textarea type="text" name="desc" placeholder="context" />
            <input type="submit" value="저장" />
          </form>
        </article>
      </div>
    );
  }
}
export default CreateContent;
