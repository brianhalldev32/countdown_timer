import React, { useState, useRef } from 'react';

import Timer from './components/Timer';
import { useInterval } from './hooks';

import TimerInput from './components/TimerInput';
import TimerView from './components/TimerView';

import './App.css';

const SPEED_OPTIONS = [
  {
    label: '1X',
    speed: 1000,
  },
  {
    label: '1.5X',
    speed: 1000 / 1.5,
  },
  {
    label: '2X',
    speed: 1000 / 2,
  },
];

function App() {
  const initialTimeRef = useRef(0);

  const [currentTime, setCurrentTime] = useState(0);
  const [speed, setSpeed] = useState(SPEED_OPTIONS[0].speed);
  const [timerState, setTimerState] = useState({
    isStarted: false,
    isPaused: false,
  });

  useInterval(() => {
    if (timerState.isStarted && !timerState.isPaused && currentTime > 0) {
      setCurrentTime((prevTime) => prevTime - 1);
    }
  }, speed);

  const handleStart = (newTime) => {
    initialTimeRef.current = newTime;
    setCurrentTime(newTime);
    setTimerState({
      ...timerState,
      isStarted: true,
      isPaused: false,
    });
  };

  const handleTimeChange = (newTime) => {
    if (!(timerState.isStarted && timerState.isPaused)) {
      setCurrentTime(newTime);
    }
  };

  const handlePause = () => {
    setTimerState({
      ...timerState,
      isPaused: !timerState.isPaused,
    });
  };

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

    /* <Paper>
      <TimerInput onStart={handleStart} onChange={handleTimeChange} />

      <TimerView
        currentTime={currentTime}
        initialTime={initialTimeRef.current}
        onPause={handlePause}
        isPaused={timerState.isPaused}
      />

      <BottomNavigation value={0} showLabels>
        {SPEED_OPTIONS.map((option) => (
          <BottomNavigationAction key={option.label} label={option.label}>
            {option.label}
          </BottomNavigationAction>
        ))}
      </BottomNavigation>
    </Paper> */
  );
}

export default App;
