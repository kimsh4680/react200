import { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdataContent from "./components/UpdataContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "welcome",
      selected_content_id: 2,
      welcome: { title: "welcome", desc: "welcome http !!" },
      subject: { title: "web", sub: "world wide web!" },
      contents: [
        { id: 1, title: "html", desc: "html is dsfsdfsdfsf" },
        { id: 2, title: "CSS", desc: "CSS is dsfsdfsdfsf" },
        { id: 3, title: "JAVA", desc: "JAVA is dsfsdfsdfsf" },
      ],
    };
  }
  getReadContent() {
    for (var i = 0; i < this.state.contents.length; i++) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
    }
  }
  getContent() {
    var _title,
      _desc,
      _article = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />;
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;

            // this.state.contents.push({
            //   id: this.max_content_id,
            //   title: _title,
            //   desc: _desc,
            // });
            var _contents = Array.from(this.state.contents);
            _contents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            // var _contents = this.state.contents.concat({
            //   id: this.max_content_id,
            //   title: _title,
            //   desc: _desc,
            // });
            this.setState({
              contents: _contents,
              mode: "read",
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === "update") {
      _content = this.getReadContent();
      _article = (
        <UpdataContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            var _contents = Array.from(this.state.contents);
            for (var i = 0; i < _contents.length; i++) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
            }

            this.setState({ contents: _contents, mode: "read" });
          }.bind(this)}
        />
      );
    }
    return _article;
  }
  render() {
    console.log("==>  App render");

    return (
      <div className="App">
        <div className="container">
          <Subject
            title={this.state.subject.title}
            sub={this.state.subject.sub}
            onChangePage={function () {
              this.setState({ mode: "welcome" });
            }.bind(this)}
          />
          {this.getContent()}
          <TOC
            onChangePage={function (id) {
              this.setState({ mode: "read", selected_content_id: Number(id) });
            }.bind(this)}
            data={this.state.contents}
          />
          <Control
            onChangeMode={function (_mode) {
              if (_mode === "delete") {
                if (window.confirm("정말로 삭제 하시겠습니까?")) {
                  var _contents = Array.from(this.state.contents);
                  for (var i = 0; _contents.length; i++) {
                    if (_contents[i].id === this.state.selected_content_id) {
                      _contents.splice(i, 1);
                      break;
                    }
                  }
                  this.setState({ contents: _contents, mode: "welcome" });
                }
              } else {
                this.setState({ mode: _mode });
              }
            }.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
