import React from 'react';
import PropTypes from 'prop-types';
import TitleBlock from '../../components/LabelBlock';

import {Box} from "@material-ui/core";

import './Resizable.css';

/*
 This component can take in another component that you want to be resizable.
 Usage:
 <Resizable>
  <h1>This title is resizable!</h1>
 </Resizable>
*/
export default class Resizable extends React.Component{
  state = {
    isResizing: false,
    newWidth: {}
  };

  static defaultProps = {
    leftComponent: <></>,
    rightComponent: <></>,
    leftTitle: "",
    rightTitle: "",
  }

  constructor(props) {
    super(props);
    this.handleMousemove.bind(this);
    this.container = React.createRef()
  }

  componentDidMount() {
    document.addEventListener('mousemove', e => this.handleMousemove(e));
    document.addEventListener('mouseup', e => this.handleMouseup(e));
  }

  handleMousedown = () => {
    this.setState({ isResizing: true});
  };

  handleMousemove = e => {
    let {isResizing} = this.state;
    // we don't want to do anything if we aren't resizing.
    if (!isResizing) {
      return;
    }


    let minWidth = 145;
    let maxWidth = this.container.current.offsetWidth;
    console.log(maxWidth);
    if (e.clientX > minWidth && e.clientX < maxWidth) {
      this.setState({ newWidth: { width: e.clientX } });
    }
  };

  // hide = () => {
  //   this.setState({ newWidth: { 0 } });
  // }

  handleMouseup = () => {
    this.setState({ isResizing: false });
  };

  render(){
    let {leftComponent, rightComponent, leftTitle, rightTitle} = this.props;
    let {newWidth} = this.state;

    return(
      <Box ref={this.container} className="resizable-container" display="flex">
        <Box className="draggable-left" style={{width: newWidth.width}} display="flex">
          <TitleBlock name={leftTitle} />
          {leftComponent}
          <div
            role="presentation"
            id="dragger"
            className="dragger"
            onMouseDown={event => {
              this.handleMousedown(event);
            }}
          >
            {/*<a onClick={this.hide} className="custom-toggler" href="#"></a>*/}
          </div>
        </Box>
        <Box className="draggable-right" display="flex" flexGrow={1}>
          <TitleBlock name={rightTitle} />
          {rightComponent}
        </Box>
      </Box>
    );
  }
}

Resizable.propTypes = {
  leftComponent: PropTypes.element,
  rightComponent: PropTypes.element,
  leftTitle: PropTypes.string,
  rightTitle: PropTypes.string
};
