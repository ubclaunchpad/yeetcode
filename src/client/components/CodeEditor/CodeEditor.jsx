import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

// class CodeEditor extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     // }

//     // handleChange(newValue) {
//     //     console.log("change", newValue);
//     // }

//     render() {
//         return (
//             <div>
//                 <p>hello world</p>
//             </div>
//         );
//     }
// }

// export default CodeEditor;
export default function CodeEditor(props) {
    return (
      <React.Fragment>
          <AceEditor
            mode="javascript"
            width="100%"
            height="100%"
            theme="github"
            showPrintMargin	= {false}
          />
      </React.Fragment>
    );
}