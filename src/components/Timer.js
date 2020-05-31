import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { IconButton, ButtonBase } from '@material-ui/core';
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
  input: {
    '& input': {
      color: '#fff',
      borderBottom: '1px solid #fff',
      textAlign: 'center',
    },
    color: '#fff',
  },
  icon: {
    color: 'rgb(250, 235, 215)',
  },
  activeSpeed: {
    color: 'rgb(95, 158, 160) !important',
  },
  otherSpeed: {
    color: 'rgb(105, 105, 105) !important',
  },
}));

function Timer() {
  const classes = useStyles();

  const initialTimeRef = useRef(0);

  const [currentTime, setCurrentTime] = useState(0);
  const [timerState, setTimerState] = useState({
    isStarted: false,
    isPaused: false,
    isReset: false,
  });
  const [speed, setSpeed] = useState(1000);

  useInterval(() => {
    if (timerState.isStarted && !timerState.isPaused && currentTime > 0) {
      setCurrentTime((prevTime) => prevTime - 1);
    }
  }, speed);

  const handleStart = () => {
    setCurrentTime(initialTimeRef.current);
    setTimerState({
      isStarted: true,
      isPaused: false,
      isReset: false,
    });

    console.log('initialtime ref', initialTimeRef.current);
  };

  const handleReset = () => {
    setCurrentTime(0);
    setTimerState({
      isStarted: false,
      isPaused: false,
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
        isPaused={timerState.isPaused}
        isStarted={timerState.isStarted}
      />

      <div className="countdown-timer__action">
        <IconButton aria-label="start" onClick={handleStart}>
          <PlayArrowIcon className={classes.icon} />
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
