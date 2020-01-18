/* eslint-disable */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AceEditor from "react-ace";
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send'; import './RightPanel.css';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import LabelBlock from '../LabelBlock';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

const useStyles = makeStyles(theme => ({
  runButton: {
    margin: theme.spacing(1),
    padding: "0.625rem 0.9375rem 0.625rem 0.9375rem"
  },
  submitButton: {
    margin: theme.spacing(1),
    padding: "0.625rem 4rem 0.625rem 4rem",
    textAlign: "center"
  },
  giveUpButton: {
    padding: "0.625em 80px 0.625em 140px"
  }
}));

const RightPanel = (props) => {
  let {socket} = props;
  const classes = useStyles();
  const [code, setCode] = useState("");

  socket.on("update", newcode => {
    setCode(newcode)
  });

  return (
    <div className="right-panel-container">
      {/* name prop value hard coded for now  */}
      <div className="label">
        <LabelBlock name="randomUser21" />
      </div>
      <div className="opponent-editor">
        {/* This is the Opponent Editor */}
        <AceEditor
          mode="javascript"
          width="100%"
          height="100%"
          theme="github"
          value={code}
          showPrintMargin={false}
          setOptions={{
            showLineNumbers: true,
            tabSize: 2
          }}
        />
      </div>
      {/* This is the Submit Button Area */}
      <div className="submit-button-area">
        <div className="timer-area-wrapper">
          <div className="timer-area">
            <div className="timer">
              TIMER
            </div>
            <Button
              className={classes.giveUpButton}
              color="primary"
              startIcon={<SentimentVeryDissatisfiedIcon />}
            >
              I give up...
            </Button>
          </div>
        </div>
        <div className="button-group-wrapper">
          <div className="button-group">
            <Button
              className={classes.runButton}
              variant="outlined"
              color="primary"
              startIcon={<SendIcon />}
            >
              Run Code
            </Button>
            <Button
              className={classes.submitButton}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </div>

      </div>
    </div>
  );

}

// RightPanel.propTypes = {
// };

// RightPanel.defaultProps = {
// };

export default RightPanel;
