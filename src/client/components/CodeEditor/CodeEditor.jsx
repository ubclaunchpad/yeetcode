/* eslint-disable */
import React from 'react';
import { connect } from "react-redux";
import AceEditor from "react-ace";
import PropTypes from 'prop-types';

import { changeCode } from '../../redux/actions';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-xcode";


const CodeEditor = (props) => {
  const {code, changeCode, stub } = props;

  const onChange = (newValue) => {
    changeCode(newValue);
  }

  return (
    <React.Fragment>
      <AceEditor
        mode="javascript"
        width="100%"
        height="100%"
        value={code}
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

const mapDispatchToProps = dispatch => ({
  changeCode: code => dispatch(changeCode(code))
});

const mapStateToProps = state => ({
  code: state.code,
  stub: state.problem.stub
});

export default connect(
  mapStateToProps, mapDispatchToProps)(
  CodeEditor
);
