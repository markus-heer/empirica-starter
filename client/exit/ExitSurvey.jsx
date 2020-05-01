import React, { useState } from 'react';

import { Centered } from 'meteor/empirica:core';

const Radio = ({ selected, name, value, label, onChange }) => (
  <label>
    <input
      type="radio"
      name={name}
      value={value}
      checked={selected === value}
      onChange={onChange}
    />
    {label}
  </label>
);

const ExitSurvey = ({ player, onSubmit }) => {
  const [values, setValues] = useState({
    age: '',
    gender: '',
    strength: '',
    fair: '',
    feedback: '',
  });

  const handleChange = event => {
    const el = event.currentTarget;
    setValues({ ...values, [el.name]: el.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
    <Centered>
      <div className="exit-survey">
        <h1> Exit Survey </h1>
        <p>
          Please submit the following code to receive your bonus: <strong>{player._id}</strong>.
        </p>
        <p>
          You final <strong>bonus</strong> is in addition of the <strong>1 base reward</strong> for
          completing the HIT.
        </p>
        <br />
        <p>
          Please answer the following short survey. You do not have to provide any information you
          feel uncomfortable with.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-line">
            <div>
              <label htmlFor="age">Age</label>
              <div>
                <input
                  id="age"
                  type="number"
                  min="0"
                  max="150"
                  step="1"
                  dir="auto"
                  name="age"
                  value={values.age}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <div>
                <input
                  id="gender"
                  type="text"
                  dir="auto"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          <div>
            <label>Highest Education Qualification</label>
            <div>
              <Radio
                selected={values.education}
                name="education"
                value="high-school"
                label="High School"
                onChange={handleChange}
              />
              <Radio
                selected={values.education}
                name="education"
                value="bachelor"
                label="US Bachelor's Degree"
                onChange={handleChange}
              />
              <Radio
                selected={values.education}
                name="education"
                value="master"
                label="Master's or higher"
                onChange={handleChange}
              />
              <Radio
                selected={values.education}
                name="education"
                value="other"
                label="Other"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-line thirds">
            <div>
              <label htmlFor="strength">How would you describe your strength in the game?</label>
              <div>
                <textarea
                  dir="auto"
                  id="strength"
                  name="strength"
                  value={values.strength}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="fair">Do you feel the pay was fair?</label>
              <div>
                <textarea
                  dir="auto"
                  id="fair"
                  name="fair"
                  value={values.fair}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="feedback">Feedback, including problems you encountered.</label>
              <div>
                <textarea
                  dir="auto"
                  id="feedback"
                  name="feedback"
                  value={values.feedback}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </Centered>
  );
};

ExitSurvey.stepName = 'ExitSurvey';

export default ExitSurvey;
