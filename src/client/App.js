import React, { Component } from 'react';
import './app.css';
import CodeEditor from './components/codeEditor';
import NavBar from "./components/NavBar";
import DiscreteSlider from "./components/sliders";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CodeEditor />
        <DiscreteSlider />
      </div>
    )
  }
}