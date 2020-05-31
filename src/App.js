import React from 'react';

import Timer from './components/Timer';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div class="timer-group">
          <div class="timer minute" />
          <div class="timer second">
            <div class="hand"><span></span></div>
            <div class="hand"><span></span></div>
          </div>
          <div class="face">
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
