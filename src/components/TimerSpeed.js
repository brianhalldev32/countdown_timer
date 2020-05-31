import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  activeSpeed: {
    color: 'rgb(95, 158, 160) !important',
    fontSize: '16px',
  },
}));

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

function TimerSpeed({ speed, onChangeSpeed }) {
  const classes = useStyles();

  return (
    <div className="countdown-timer__speed">
      {SPEED_OPTIONS.map((option) => (
        <ButtonBase
          key={option.label}
          className={classNames({
            'countdown-timer__speed__item': true,
            [classes.activeSpeed]: speed === option.speed,
          })}
          onClick={() => onChangeSpeed(option.speed)}
        >
          {option.label}
        </ButtonBase>
      ))}
    </div>
  );
}

TimerSpeed.propTypes = {
  speed: PropTypes.number.isRequired,
  onChangeSpeed: PropTypes.func.isRequired,
};

export default TimerSpeed;
