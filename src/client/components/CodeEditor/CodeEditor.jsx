import React from 'react';
import AceEditor from "react-ace";
import PropTypes from 'prop-types';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-xcode";

const anotherMultilineString = `/*
function addition(num1, num2) {
  return num1 + num2;
}
*/
`

const CodeEditor = (props) => {
  const { onChangeCallBack, value, socket } = props;

  const onChange = (newValue) => {
    onChangeCallBack(newValue);
    socket.emit("message", newValue);
  }

  return (
    <React.Fragment>
      <AceEditor
        defaultValue={anotherMultilineString}
        mode="javascript"
        width="100%"
        height="100%"
        value={value}
        theme="xcode"
        showPrintMargin={false}
        onChange={onChange}
        setOptions={{
          showLineNumbers: true,
        }}
      />
    </React.Fragment>
  );
}

CodeEditor.propTypes = {
  /* the classname */
  // className: PropTypes.string,
  /* the callback fn to handle change of the editor's value */
  onChangeCallBack: PropTypes.func,
  /* the value to be displayed by code editor */
  value: PropTypes.string
};

CodeEditor.defaultProps = {
  value: '',
  onChangeCallBack: () => {}
}

export default CodeEditor;
