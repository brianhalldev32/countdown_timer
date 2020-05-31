import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { TextField, Fab, Button } from '@material-ui/core';

function TimerInput({ onStart, onChange }) {
  const [time, setTime] = useState('');
  const [error, setError] = useState(null);

  // NOTE: Event handler for time input
  const handleTimeInput = (e) => {
    const newTime = Number(e.target.value);

    if (!Number.isFinite(newTime) || newTime < 0) {
      setError('Time should be positive numbers');
    } else {
      setError(null);
    }

    setTime(e.target.value);
    // onChange(newTime * 60);
  };

  return (
    <Fragment>
      <TextField
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        label="Countdown"
        error={!!error}
        helperText={error}
        value={time}
        onChange={handleTimeInput}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={() => onStart(time * 60)}
        disabled={!!error}
      >
        Start
      </Button>
    </Fragment>
  );
}

TimerInput.propTypes = {
  onStart: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TimerInput;
