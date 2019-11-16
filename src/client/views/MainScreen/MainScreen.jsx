/* eslint-disable */
import React from 'react';
import NavBar from '../../components/NavBar';
import Resizable from '../../components/Resizable';
import CodeEditor from '../../components/CodeEditor';

import TitleBlock from '../../components/LabelBlock';

import { RightPanel } from '../../components';

import {Box} from "@material-ui/core";

import './MainScreen.css';


class MainScreen extends React.Component {
    render() {
        return (
          <div className="main-screen-container">
            <div className="header-area">
              <NavBar />
            </div>
            <div className="content-area">
              <div className="left-panel">
                <Box className="container" display="flex">
                  <Resizable className="draggable-left">
                    <>
                      <TitleBlock name="description" />
                      <p>LEFT</p>
                    </>
                  </Resizable>
                  <Box className="draggable-right" display="flex" flexGrow={1}>
                    <>
                      <TitleBlock name="PineappleSlayer69" />
                      <p>RIGHT</p>
                    </>
                  </Box>
                </Box>
              </div>
              <div className="right-panel">
                <RightPanel />
              </div>
            </div>
            <CodeEditor />
          </div>

      );
    }
}

export default MainScreen;
