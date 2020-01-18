/* eslint-disable */
import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import Resizable from '../../components/Resizable';
import DiscreteSlider from '../../components/Sliders';
import { RightPanel, CodeEditor } from '../../components';
import DescrPanel from "../../components/DescrPanel";
import './MainScreen.css';

const MainScreen = React.memo((props) => {
  const [mainEditorValue, setMainCodeValue] = useState("");

  // update the state of the main editor
  // NOTE: must change b/c rn this component rerendering every time which is BAD
  const updateMainEditorValue = (newValue) => {
    setMainCodeValue(newValue);
  }

  return (
    <div className="main-screen-container">
      <div className="header-area">
        <NavBar />
      </div>
      <div className="content-area">
        <div className="left-panel">
          <Resizable
            socket={props.socket}
            leftComponent={<DescrPanel />}
            leftTitle="Description"
            rightComponent={
              <CodeEditor socket={props.socket} onChangeCallBack={updateMainEditorValue} value={mainEditorValue} />
            }
            rightTitle="PineappleSlayer69"
          />
          <DiscreteSlider />
        </div>
        <div className="right-panel">
          <RightPanel
            socket={props.socket}
          />
        </div>
      </div>
    </div>
  );
});

export default MainScreen;
