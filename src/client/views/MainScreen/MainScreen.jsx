/* eslint-disable */
import React from 'react';
import NavBar from '../../components/NavBar';
import Resizable from '../../components/Resizable';
import CodeEditor from '../../components/CodeEditor';
import DiscreteSlider from '../../components/Sliders';
import TitleBlock from '../../components/LabelBlock';
import DescrPanel from "../../components/DescrPanel";

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
                <Resizable
                  leftComponent={<DescrPanel />}
                  leftTitle="Description"
                  rightComponent={<p>RIGHT</p>}
                  rightTitle="PineappleSlayer69"
                />
                <DiscreteSlider />
              </div>
              <div className="right-panel">
                <RightPanel />
              </div>
            </div>
          </div>
      );
    }
}

export default MainScreen;
