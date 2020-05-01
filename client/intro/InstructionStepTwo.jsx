import React from 'react';

import { Centered } from 'meteor/empirica:core';
import { Button } from '../shared/StyledComponents';

const InstructionStepTwo = ({ hasPrev, hasNext, onNext, onPrev }) => (
  <Centered>
    <h1> Instructions 2 </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, animi? Quae autem asperiores
      officiis voluptatum fuga recusandae minima! Animi pariatur ex sapiente laborum. Ipsa quo quia
      ab, veritatis et labore.
    </p>

    <p>
      <Button type="button" onClick={onPrev} disabled={!hasPrev}>
        Previous
      </Button>
      <Button type="button" onClick={onNext} disabled={!hasNext}>
        Next
      </Button>
    </p>
  </Centered>
);

export default InstructionStepTwo;
