import { StageTimeWrapper } from 'meteor/empirica:core';
import React from 'react';

const Timer = ({ remainingSeconds }) => {
  const classes = ['timer'];

  if (remainingSeconds <= 5) {
    classes.push('lessThan5');
  } else if (remainingSeconds <= 10) {
    classes.push('lessThan10');
  }

  return (
    <div className={classes.join(' ')}>
      <h4>Timer</h4>
      <span className="seconds">{remainingSeconds}</span>
    </div>
  );
};

export default StageTimeWrapper(Timer);
