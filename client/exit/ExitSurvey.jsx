import React, { useState } from 'react';
import styled from 'styled-components';

import { Centered } from 'meteor/empirica:core';
import { Label, Radio, Input, Textarea, Button } from '../shared/StyledComponents';

const FormLine = styled.div`
  display: flex;

  & > div {
    margin-right: 30px;

    textarea {
      min-height: 90px;
      width: 100%;
    }
  }
`;

const FormLineThirds = styled.div`
  display: flex;

  & > div {
    margin-right: 30px;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 30%;
    label {
      min-height: 36px;
    }

    textarea {
      min-height: 90px;
      width: 100%;
    }
  }
`;

const RadioInput = ({ selected, name, value, label, onChange }) => (
  <Label>
    <Radio
      type="radio"
      name={name}
      value={value}
      checked={selected === value}
      onChange={onChange}
    />
    {label}
  </Label>
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
        <FormLine>
          <div>
            <Label htmlFor="age">Age</Label>
            <div>
              <Input
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
            <Label htmlFor="gender">Gender</Label>
            <div>
              <Input
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
        </FormLine>

        <div>
          <Label>Highest Education Qualification</Label>
          <div>
            <RadioInput
              selected={values.education}
              name="education"
              value="high-school"
              label="High School"
              onChange={handleChange}
            />
            <RadioInput
              selected={values.education}
              name="education"
              value="bachelor"
              label="US Bachelor's Degree"
              onChange={handleChange}
            />
            <RadioInput
              selected={values.education}
              name="education"
              value="master"
              label="Master's or higher"
              onChange={handleChange}
            />
            <RadioInput
              selected={values.education}
              name="education"
              value="other"
              label="Other"
              onChange={handleChange}
            />
          </div>
        </div>

        <FormLineThirds>
          <div>
            <Label htmlFor="strength">How would you describe your strength in the game?</Label>
            <div>
              <Textarea
                dir="auto"
                id="strength"
                name="strength"
                value={values.strength}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="fair">Do you feel the pay was fair?</Label>
            <div>
              <Textarea
                dir="auto"
                id="fair"
                name="fair"
                value={values.fair}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="feedback">Feedback, including problems you encountered.</Label>
            <div>
              <Textarea
                dir="auto"
                id="feedback"
                name="feedback"
                value={values.feedback}
                onChange={handleChange}
              />
            </div>
          </div>
        </FormLineThirds>

        <Button type="submit">Submit</Button>
      </form>
    </Centered>
  );
};

ExitSurvey.stepName = 'ExitSurvey';

export default ExitSurvey;
