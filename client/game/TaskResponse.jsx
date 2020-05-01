import React from 'react';
import Slider from 'meteor/empirica:slider';

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
    <div className="task-response">
      <div className="response-submitted">
        <h5>Waiting on other players...</h5>
        Please wait until all players are ready
      </div>
    </div>
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
    <div className="task-response">
      <form onSubmit={handleSubmit}>
        {renderSlider()}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default TaskResponse;
