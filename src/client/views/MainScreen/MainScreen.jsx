/* eslint-disable */
import React, { useState } from 'react';
import { Box } from "@material-ui/core";
import NavBar from '../../components/NavBar';
import Resizable from '../../components/Resizable';
import DiscreteSlider from '../../components/Sliders';
import LabelBlock from '../../components/LabelBlock';
import { RightPanel, CodeEditor } from '../../components';
import './MainScreen.css';

const MainScreen = React.memo((props) => {
  const [mainEditorValue, setMainCodeValue] = useState("");

  // update the state of the main editor
  // NOTE: must change b/c rn this component rerendering every time which is BAD
  const updateMainEditorValue = (newValue) => {
    setMainCodeValue(newValue);
  }
  console.log("hello");
  return (
    <div className="main-screen-container">
      <div className="header-area">
        <NavBar />
      </div>
      <div className="content-area">
        <div className="left-panel">
          {/* <div className="main-editor-container"> */}
          <Box className="container" display="flex">
            <Resizable className="draggable-left">
              <>
                <div className="label-description">
                  <LabelBlock name="description" />
                </div>
                <p>LEFT</p>
              </>
            </Resizable>
            <Box className="draggable-right" display="flex" flexGrow={1}>
              <>
                <div className="label-main-editor">
                  <LabelBlock name="PineappleSlayer69" />
                </div>
                <div className="main-editor">
                  <CodeEditor socket={props.socket} onChangeCallBack={updateMainEditorValue} value={mainEditorValue} />
                  {/* <CodeEditor /> */}
                </div>
              </>
            </Box>
          </Box>
          {/* </div> */}
          <div className="slider-area">
            <DiscreteSlider />
          </div>
        </div>
        <div className="right-panel">
          <RightPanel socket={props.socket} />
        </div>
      </div>
    </div>
  );
});

export default MainScreen;
