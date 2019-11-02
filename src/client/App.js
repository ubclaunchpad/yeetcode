import React, { Component } from 'react';
import './app.css';
import CodeEditor from './components/codeEditor';
import NavBar from "./components/NavBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CodeEditor />
      </div>
    )
  }
}