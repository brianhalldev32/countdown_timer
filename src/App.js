import React from 'react';

import Timer from './components/Timer';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="timer-group">
          <div className="timer minute" />
          <div className="timer second">
            <div className="hand"><span></span></div>
            <div className="hand"><span></span></div>
          </div>
          <div className="face">
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
