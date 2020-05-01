import React from 'react';

import { Centered } from 'meteor/empirica:core';

const InstructionStepOne = ({ hasPrev, hasNext, onNext, onPrev }) => (
  <Centered>
    <div className="instructions">
      <h1> Instructions 1 </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, animi? Quae autem
        asperiores officiis voluptatum fuga recusandae minima! Animi pariatur ex sapiente laborum.
        Ipsa quo quia ab, veritatis et labore.
      </p>

      <p>
        <button type="button" onClick={onPrev} disabled={!hasPrev}>
          Previous
        </button>
        <button type="button" onClick={onNext} disabled={!hasNext}>
          Next
        </button>
      </p>
    </div>
  </Centered>
);

export default InstructionStepOne;
