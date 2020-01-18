/* eslint-disable */
import React, { Component } from 'react';
import './app.css';
import { MainScreen } from './views';
import socketIOClient from "socket.io-client";

export default class App extends Component{
  state = {
    socket: socketIOClient("http://127.0.0.1:8080"),
  }
  render() {
    let {socket} = this.state;
    return (
      <div>
        <MainScreen socket={socket} title="YeetCode"/>
      </div>
    )
  }
}
