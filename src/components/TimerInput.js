import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    '& input': {
      color: 'rgb(255, 228, 196)',
      borderBottom: '1px solid #fff',
      textAlign: 'center',
      fontWeight: 'bold',
      padding: 0,
      fontSize: '20px',
    },
    color: '#fff',
  },
}));

function TimerInput({ onChange }) {
  const classes = useStyles();

  const [time, setTime] = useState('');
  const [error, setError] = useState(null);

  // NOTE: Event handler for time input
  const handleTimeInput = (e) => {
    const newTime = Number(e.target.value);

    if (!Number.isFinite(newTime) || newTime < 0) {
      setError('Please enter positive numbers only!');
      setTime(e.target.value);
      onChange(newTime * 60);
    } else {
      setError(null);
      setTime(e.target.value);
    }
  };

  return (
    <TextField
      type="number"
      className={classes.input}
      placeholder="(Min)"
      error={!!error}
      helperText={error}
      value={time}
      onChange={handleTimeInput}
    />
  );
}

TimerInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default TimerInput;
