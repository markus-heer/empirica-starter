import React from 'react';

import styled from 'styled-components';
import TaskResponse from './TaskResponse';
import TaskStimulus from './TaskStimulus';

const Wrapper = styled.div`
  align-content: right;
  padding: 4rem 4rem 0 4rem;
`;

const Task = props => (
  <Wrapper>
    <TaskStimulus {...props} />
    <TaskResponse {...props} />
  </Wrapper>
);

export default Task;
