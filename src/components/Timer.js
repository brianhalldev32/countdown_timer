import React, { useState, useRef } from 'react';
import { IconButton } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { makeStyles } from '@material-ui/core/styles';

import TimerInput from './TimerInput';
import TimerView from './TimerView';
import TimerSpeed from './TimerSpeed';
import { useInterval } from '../hooks';

import './Timer.css';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: 'rgb(250, 235, 215)',
  },
}));

function Timer() {
  const classes = useStyles();

  const initialTimeRef = useRef(0);

  const [currentTime, setCurrentTime] = useState(0);
  const [timerState, setTimerState] = useState({
    isStarted: false,
    isPaused: true,
    isReset: false,
  });
  const [speed, setSpeed] = useState(1000);

  useInterval(() => {
    if (timerState.isStarted && !timerState.isPaused && currentTime > 0) {
      setCurrentTime((prevTime) => prevTime - 1);
    }
  }, speed);

  const handleStartAndPause = () => {
    if (!timerState.isStarted) {
      if (initialTimeRef.current > 0) {
        setCurrentTime(initialTimeRef.current);
        setTimerState({
          isStarted: true,
          isPaused: false,
          isReset: false,
        });
      }
    } else {
      setTimerState({
        ...timerState,
        isPaused: !timerState.isPaused,
      })
    }
  };

  const handleReset = () => {
    initialTimeRef.current = 0;
    setCurrentTime(0);
    setTimerState({
      isStarted: false,
      isPaused: true,
      isReset: true,
    });
  };

  return (
    <div className="countdown-timer">
      <TimerInput
        onChange={(newTime) => (initialTimeRef.current = newTime)}
        isReset={timerState.isReset}
        isStarted={timerState.isStarted}
      />

      <TimerView
        currentTime={currentTime}
        initialTime={initialTimeRef.current}
        isStarted={timerState.isStarted}
      />

      <div className="countdown-timer__action">
        <IconButton aria-label="start" onClick={handleStartAndPause}>
          {timerState.isPaused ? (
            <PlayArrowIcon className={classes.icon} />
          ) : (
            <PauseIcon className={classes.icon} />
          )}
        </IconButton>

        <IconButton aria-label="reset" onClick={handleReset}>
          <AutorenewIcon className={classes.icon} />
        </IconButton>
      </div>

      <TimerSpeed
        speed={speed}
        onChangeSpeed={(newSpeed) => setSpeed(newSpeed)}
      />
    </div>
  );
}

export default Timer;
