/* eslint-disable */
import React from 'react';
import { connect } from "react-redux";

import './ProgressPanel.css';

class ProgressPanel extends React.Component {
  scrollToBottom = () => {
    this.end.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }
  
  render() {
    let {history} = this.props;
    console.log(history);
    return (
      <div className="progress-panel">
        <h3>Updates</h3>
        <div className="updates">{history.map(item => <div>{item}</div> )}
        <div ref={(el) => { this.end = el; }}></div></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history
});

export default connect(
  mapStateToProps)(
    ProgressPanel
);
