/* eslint-disable */
import React, { Component } from 'react';
import './app.css';
import {Box} from "@material-ui/core";
import CodeEditor from './components/codeEditor';
import NavBar from "./components/NavBar";
import Resizable from "./components/resizable";


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Box className="container" display="flex">
          <Resizable className="left">
            <p>LEFT</p>
          </Resizable>
          <Box className="right" display="flex" flexGrow={1}>
            <p>RIGHT</p>
          </Box>
        </Box>
        <CodeEditor />
      </div>
    )
  }
}
