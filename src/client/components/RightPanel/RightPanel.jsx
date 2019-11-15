import React from 'react';
import PropTypes from 'prop-types';
import TitleBlock from '../LabelBlock';

class RightPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="rightPanelContainer">
                {/* name prop value hard coded for now  */}
                <TitleBlock name = "randomUser21" /> 
                <div className="opponentEditorContainer">
                    {/* This is the Opponent Editor */}
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