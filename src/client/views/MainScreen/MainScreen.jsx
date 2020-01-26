/* eslint-disable */
import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import Resizable from '../../components/Resizable';
import ProgressPanel from '../../components/ProgressPanel';
import { RightPanel, CodeEditor } from '../../components';
import DescrPanel from "../../components/DescrPanel";
import './MainScreen.css';

const MainScreen = React.memo((props) => {
  return (
    <div className="main-screen-container">
      <div className="header-area">
        <NavBar />
      </div>
      <div className="content-area">
        <div className="left-panel">
          <Resizable
            leftComponent={<DescrPanel />}
            leftTitle="Description"
            rightComponent={
              <CodeEditor />
            }
            rightTitle="PineappleSlayer69"
          />
          <ProgressPanel />
        </div>
        <div className="right-panel">
          <RightPanel />
        </div>
      </div>
    </div>
  );
});

export default MainScreen;
