/* eslint-disable */
import React, { Component } from 'react';
import './app.css';
import DescrPanel from "./components/descr-panel";

export default class App extends Component {
// export App = () => {

  // componentDidMount() {
  //   fetch('/api/getUsername')
  //     .then(res => res.json())
  //     .then(user => this.setState({ username: user.username }));
  // }

  render() {
    return (
      <div>
        <DescrPanel />
      </div>
    );
  }
}
