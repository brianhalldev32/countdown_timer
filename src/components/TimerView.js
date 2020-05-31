import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function formatTime(seconds) {
  if (seconds < 0) {
    return '';
  }

  let firstPart = Math.floor(seconds / 60);
  let secondPart = seconds % 60;

  firstPart = String(firstPart).length === 1 ? '0' + firstPart : firstPart;
  secondPart = String(secondPart).length === 1 ? '0' + secondPart : secondPart;

  return `${firstPart}:${secondPart}`;
}

function TimerView({ currentTime, initialTime, isPaused, isStarted }) {
  return (
    <Fragment>
      <div className="countdown-timer__warning">
        {isStarted && currentTime < initialTime / 2 && <span>More than halfway there!</span>}
      </div>

      <div className="countdown-timer__time">
        <span>{formatTime(currentTime)}</span>
      </div>
    </Fragment>
  );
}

TimerView.propTypes = {
  currentTime: PropTypes.number.isRequired,
  initialTime: PropTypes.number.isRequired,
  isPaused: PropTypes.bool.isRequired,
  isStarted: PropTypes.bool.isRequired,
};

export default TimerView;
