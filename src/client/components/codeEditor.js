// eslint-disable
import React from "react";
import socketIOClient from "socket.io-client";

class CodeEditor extends React.Component {
  state = {
    username: null,
    socket: socketIOClient("http://127.0.0.1:8080"),
    code: null,
    opponentCode: null
  };

  componentDidMount() {
    let { socket } = this.state;
    fetch("/api/getUsername")
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));

    socket.on("update", code => {
      this.setState({
        opponentCode: code
      });
    });
  }

  handleChange = e => {
    this.setState({
      code: e.target.value
    });

    this.submitCode();
  };

  submitCode = () => {
    let { socket } = this.state;
    socket.emit("message", this.state.code);
  };

  render() {
    return (
      <div>
        <h1>Yeetcode</h1>
        <textarea
          onChange={this.handleChange}
          value={this.state.code}
          id="textarea"
        />
        {/* <button onClick={this.submitCode}>Submit</button> */}
        <h2>Opponent's Code</h2>
        <textarea value={this.state.opponentCode} />
      </div>
    );
  }
}

export default CodeEditor;
