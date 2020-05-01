import React, { useState } from 'react';

import { Centered } from 'meteor/empirica:core';

const Quiz = ({ hasPrev, onNext, onPrev }) => {
  const [answers, setAnswers] = useState({ sum: '', horse: '' });

  const handleChange = event => {
    const el = event.currentTarget;
    setAnswers({ ...answers, [el.name]: el.value.trim().toLowerCase() });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (answers.sum !== '4' || answers.horse !== 'white') {
      // eslint-disable-next-line no-alert
      alert('Incorrect! Read the instructions, and please try again.');
    } else {
      onNext();
    }
  };

  return (
    <Centered>
      <div className="quiz">
        <h1> Quiz </h1>
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="sum">What is 2+2?</label>
            <input
              type="text"
              dir="auto"
              id="sum"
              name="sum"
              placeholder="e.g. 3"
              value={answers.sum}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </p>
          <p>
            <label htmlFor="horse">What color was Napoleon&apos;s white horse?</label>
            <input
              type="text"
              dir="auto"
              id="horse"
              name="horse"
              placeholder="e.g. brown"
              value={answers.horse}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </p>

          <p>
            <button type="button" onClick={onPrev} disabled={!hasPrev}>
              Back to instructions
            </button>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </Centered>
  );
};

export default Quiz;
