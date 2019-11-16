import React from 'react';

import {Box} from "@material-ui/core";

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

  constructor(props) {
    super(props);
    this.handleMousemove.bind(this);
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


    let minWidth = 0;
    let maxWidth = document.body.offsetWidth;
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
    let {children, className} = this.props;

    return(
      <Box className={className} style={{width: this.state.newWidth.width}} display="flex">
        {children}
        <div
          id="dragger"
          className="dragger"
          onMouseDown={event => {
            this.handleMousedown(event);
          }}
        >
          {/*<a onClick={this.hide} className="custom-toggler" href="#"></a>*/}
        </div>
      </Box>
    );
  }
}
