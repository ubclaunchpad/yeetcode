/* eslint-disable */

import React from 'react';
import './DescrPanel.css';

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//     maxWidth: 500,
//   },
// });

export default function DescrPanel() {

  return (

    <div className="flex-container">

        <h3>
          Reverse string
        </h3>
      Write a function that reverses a string. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
      <hr/>
      <hr/>

      <h4>Example 1:</h4>
      <div>
        <p>Input: "hello"</p>
        <p>Output: "olleh"</p>
      </div>

      <h4>Example 2:</h4>
      <div>
        <p>Input: "Hannah"</p>
        <p>Output: "hannaH"</p>
      </div>
    </div>


  );
}
