/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import CodeEditor from '../CodeEditor';
import LabelBlock from '../LabelBlock';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import './RightPanel.css';

// const useStyles = makeStyles({
//   runButton: {
//     margin: theme.spacing(1),
//   },
// });

class RightPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      // const classes = useStyles();

        return (
          <div className="right-panel-container">
            {/* name prop value hard coded for now  */}
            <LabelBlock name="randomUser21" /> 
            <div className="opponent-editor">
              {/* This is the Opponent Editor */}
              <CodeEditor />
            </div>
            <div className="submit-button-area">
              {/* This is the Submit Button Area */}
                <Button
                  variant="outlined"
                  color="primary"
                >
                  Run Code
                </Button>
                <Button>
                  Submit
                </Button>
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