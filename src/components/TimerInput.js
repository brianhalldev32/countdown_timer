import React, { useState, useEffect } from 'react';
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

function TimerInput({ onChange, isReset, isStarted }) {
  const classes = useStyles();

  const [time, setTime] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isReset) {
      setTime('');
    }
  }, [isReset]);

  // NOTE: Event handler for time input
  const handleTimeInput = (e) => {
    const newTime = Number(e.target.value);

    if (!Number.isFinite(newTime) || newTime < 0 || newTime > 99) {
      setError('Valid range: [1 - 99]');
      setTime(e.target.value);
    } else {
      setError(null);
      setTime(e.target.value);
      onChange(newTime * 60);
    }
  };

  return (
    <div className="countdown-timer__input">
      <TextField
        type="number"
        className={classes.input}
        placeholder="(Min)"
        error={!!error}
        helperText={error}
        value={time}
        onChange={handleTimeInput}
        disabled={isStarted}
      />
    </div>
  );
}

TimerInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  isReset: PropTypes.bool.isRequired,
  isStarted: PropTypes.bool.isRequired,
};

export default TimerInput;
