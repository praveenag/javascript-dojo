import React, { Component } from 'react';
import './App.css';
import check from './check.js'

/* 
 * [ // every 4th
 *   1, 0, 0,
 *   0, 1, 0,
 *   0, 0, 1
 * ]
 * 
 * [ // every 2th
 *   0, 0, 1,
 *   0, 1, 0,
 *   1, 0, 0
 * ]
 * 
 * [ // every
 *   1, 1, 1,
 *   0, 0, 0,
 *   0, 0, 0
 * ]
 *  */
class App extends Component {
  render() {

    console.log(check(
      [ // every 3th
        0, 0, 1,
        0, 1, 0,
        1, 0, 0
      ]
    ))

    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
