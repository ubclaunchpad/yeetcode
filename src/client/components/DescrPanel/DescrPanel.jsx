/* eslint-disable */

import React from 'react';
import { connect } from "react-redux";

import './DescrPanel.css';

const DescrPanel = props => {
  let {title, description} = props;
  return (

    <div className="flex-container">
      <h3>{title}</h3>
      <span dangerouslySetInnerHTML={{ __html: description}}></span>
    </div>
  );
}

const mapStateToProps = state => ({
  title: state.problem.name,
  description: state.problem.description
});

export default connect(
  mapStateToProps)(
    DescrPanel
);
