import React from 'react';
import socketIOClient from "socket.io-client";

class CodeEditor extends React.Component{
    state = {
        socket: socketIOClient('http://127.0.0.1:8080'),
        code: null,
        opponentCode: null
      };

      componentDidMount() {
        let {socket} = this.state;

        socket.on('update', (code) => {
          this.setState({
            opponentCode: code
          });
        })
      }

      handleChange = (e) => {
        this.setState({
          code: e.target.value
        });

        this.submitCode();
      };

      submitCode = () => {
        let {socket, code} = this.state;

        socket.emit('message', code);
      };

      render(){
        let {code, opponentCode} = this.state;
          return(
            <div>
              <h1>Yeetcode</h1>
              <textarea onChange={this.handleChange} value={code} id="textarea" />
              {/* <button onClick={this.submitCode}>Submit</button> */}
              <h2>Opponent&apos;s Code</h2>
              <textarea value={opponentCode} />
            </div>
          );
      }
}

export default CodeEditor;
