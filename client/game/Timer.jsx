import { StageTimeWrapper } from 'meteor/empirica:core';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const LessThan5 = styled.div`
  color: red;
`;

const LessThan10 = styled.div`
  color: orange;
`;

const Timer = ({ remainingSeconds }) => {
  const renderSeconds = () => {
    if (remainingSeconds <= 5) {
      return <LessThan5>{remainingSeconds}</LessThan5>;
    }
    if (remainingSeconds <= 10) {
      return <LessThan10>{remainingSeconds}</LessThan10>;
    }
    return <div>{remainingSeconds}</div>;
  };

  return (
    <Wrapper>
      <h4>Timer</h4>
      {renderSeconds()}
    </Wrapper>
  );
};

export default StageTimeWrapper(Timer);
