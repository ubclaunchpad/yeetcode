/* eslint-disable */
import React from 'react';
import NavBar from '../../components/NavBar'
import DescrPanel from "./components/descr-panel";
import DiscreteSlider from '../../components/sliders'
import { RightPanel } from '../../components';
import './MainScreen.css'

class MainScreen extends React.Component {
    render() {
        return (
          <div className="main-screen-container">
            <div className="header-area">
              <NavBar />
            </div>
            <div className="content-area">
              <div className="left-panel">
              <DescrPanel/>

                        Hi
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