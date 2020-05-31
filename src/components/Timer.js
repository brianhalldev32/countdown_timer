import React from 'react';
import { TextField, IconButton, ButtonBase } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import TimerInput from './TimerInput';

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

  return (
    <div className="countdown-timer">
      <div className="countdown-timer__input">
        <TextField
          type="number"
          className={classes.input}
          placeholder="countdown: (min)"
        />
      </div>

      <div className="countdown-timer__warning">
        <span>More than halfway there!</span>
      </div>

      <div className="countdown-timer__time">
        <span>00:00</span>
      </div>

      <div className="countdown-timer__action">
        <IconButton aria-label="start">
          <PlayArrowIcon className={classes.icon} />
        </IconButton>

        <IconButton aria-label="new">
          <AutorenewIcon className={classes.icon} />
        </IconButton>
      </div>

      <div className="countdown-timer__speed">
        <ButtonBase
          className={classNames({
            'countdown-timer__speed__item': true,
            [classes.activeSpeed]: true,
          })}
        >
          1X
        </ButtonBase>

        <ButtonBase
          className={classNames({
            'countdown-timer__speed__item': true,
            [classes.otherSpeed]: true,
          })}
        >
          1.5X
        </ButtonBase>

        <ButtonBase
          className={classNames({
            'countdown-timer__speed__item': true,
            [classes.otherSpeed]: true,
          })}
        >
          2X
        </ButtonBase>
      </div>
    </div>
  );
}

export default Timer;
