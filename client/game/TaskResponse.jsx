import React from 'react';
import Slider from 'meteor/empirica:slider';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0.8rem 1.2rem;
  border-radius: 0.3rem;
  border: 1px solid lightgray;
  background-color: #eee;

  &:hover {
    background-color: #ddd;
  }
`;

const ResponseSubmittedWrapper = styled.div`
  margin: 3rem 0 0;
  background-color: #e8e8e8;
  padding: 2rem;
  border-radius: 0.4rem;

  h5 {
    margin: 0 0 0.5rem;
    font-size: inherit;
  }
`;

const ResponseWrapper = styled.div`
  margin: 3rem 0 0;

  form {
    width: 40rem;

    button[type='submit'] {
      margin-top: 2rem;
    }
  }
`;

const TaskResponse = ({ player }) => {
  const handleChange = num => {
    const value = Math.round(num * 100) / 100;
    player.round.set('value', value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    player.stage.submit();
  };

  const renderSubmitted = () => (
    <ResponseSubmittedWrapper>
      <h5>Waiting on other players...</h5>
      Please wait until all players are ready
    </ResponseSubmittedWrapper>
  );

  const renderSlider = () => (
    <Slider
      min={0}
      max={1}
      stepSize={0.01}
      labelStepSize={0.25}
      onChange={handleChange}
      value={player.round.get('value')}
      hideHandleOnEmpty
    />
  );

  // If the player already submitted, don't show the slider or submit button
  if (player.stage.submitted) {
    return renderSubmitted();
  }

  return (
    <ResponseWrapper>
      <form onSubmit={handleSubmit}>
        {renderSlider()}

        <Button type="submit">Submit</Button>
      </form>
    </ResponseWrapper>
  );
};
export default TaskResponse;
