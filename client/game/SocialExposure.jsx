import React from 'react';
import Slider from 'meteor/empirica:slider';

const SocialExposure = ({ game, player }) => {
  const renderSocialInteraction = otherPlayer => {
    const value = otherPlayer.round.get('value');

    return (
      <div className="alter" key={otherPlayer._id}>
        <img src={otherPlayer.get('avatar')} className="profile-avatar" alt="avatar" />
        <div className="range">
          <Slider min={0} max={1} stepSize={0.01} value={value} disabled hideHandleOnEmpty />
        </div>
      </div>
    );
  };

  const otherPlayers = _.reject(game.players, p => p._id === player._id);

  if (otherPlayers.length === 0) {
    return null;
  }

  return (
    <div className="social-exposure">
      <p>
        <strong>There are {otherPlayers.length} other players:</strong>
      </p>
      {otherPlayers.map(renderSocialInteraction)}
    </div>
  );
};

export default SocialExposure;
