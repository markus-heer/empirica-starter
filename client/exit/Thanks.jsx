import React from 'react';
import styled from 'styled-components';

const Finished = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Thanks = () => (
  <Finished>
    <h4>Finished!</h4>
    <p>Thank you for participating!</p>
  </Finished>
);

Thanks.stepName = 'Thanks';

export default Thanks;
