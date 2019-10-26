import React, { Component } from 'react';
import './app.css';
import ReactImage from './assets/react.png';
import socketIOClient from "socket.io-client";

export default class App extends Component {
  state = {
    username: null,
    socket: socketIOClient('http://127.0.0.1:8080'),
    code: null
  };

  componentDidMount() {
    let {socket} = this.state;
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));

    socket.on('update', (code) => {
      console.log('oponent updated ' + code)
    })
  };

  handleChange = (e) => {
    this.setState({
      code: e.target.value
    });
  };

  submit = () => {
    let {socket} = this.state;
    console.log("hello " + this.state.code);
    socket.emit('message', this.state.code);
  };

  render() {
    const { username } = this.state;
    return (
      <div>
        <h1>Yeetcode</h1>
        <textarea onChange={this.handleChange} value={this.state.code} id="textarea"></textarea><br />
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}
