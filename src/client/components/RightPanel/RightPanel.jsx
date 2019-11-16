/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import LabelBlock from '../LabelBlock';
import CodeEditor from '../CodeEditor';

class RightPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="rightPanelContainer">
            {/* name prop value hard coded for now  */}
            <LabelBlock name="randomUser21" /> 
            <div className="opponentEditorContainer">
              {/* This is the Opponent Editor */}
              <CodeEditor />
            </div>
            <div className="submitButtonArea">
              {/* This is the Submit Button Area */}
            </div>
          </div>
        );
    }
}

RightPanel.propTypes = {
    className: PropTypes.string
};

RightPanel.defaultProps = {
    className: ''
};

export default RightPanel;