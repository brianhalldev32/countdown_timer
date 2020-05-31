import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, IconButton, Grid } from '@material-ui/core';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function formatTime(seconds) {
  if (seconds < 0) {
    return '';
  }

  return `${Math.floor(seconds / 60)}:${seconds % 60}`;
}

function TimerView({ currentTime, initialTime, onPause, isPaused }) {
  return (
    <Grid container item xs={12} justify="center" alignItems="center">
      <Grid item>
        <Typography>
          KKK
          {currentTime < initialTime / 2 ? 'More than halfway there!' : ' '}
        </Typography>
      </Grid>

      <Grid item>
        <Typography>{formatTime(currentTime)}</Typography>
      </Grid>

      <Grid item>
        <IconButton variant="contained" color="primary" onClick={onPause}>
          {isPaused ? <PlayArrowIcon /> : <PauseIcon />}
        </IconButton>
      </Grid>
    </Grid>
  );
}

TimerView.propTypes = {
  currentTime: PropTypes.number.isRequired,
  initialTime: PropTypes.number.isRequired,
  onPause: PropTypes.func.isRequired,
  isPaused: PropTypes.bool.isRequired,
};

export default TimerView;
