import React from 'react';
import styled from 'styled-components';
import Slider from 'meteor/empirica:slider';
import { Avatar } from '../shared/StyledComponents';

const Wrapper = styled.div`
  margin: 4rem;
`;

const Alter = styled.div`
  display: flex;
  padding-right: 3rem;

  img {
    width: 6rem;
    height: 6rem;
    margin-right: 3rem;
  }
`;

const Range = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialExposure = ({ game, player }) => {
  const renderSocialInteraction = otherPlayer => {
    const value = otherPlayer.round.get('value');

    return (
      <Alter key={otherPlayer._id}>
        <Avatar src={otherPlayer.get('avatar')} alt="avatar" />
        <Range>
          <Slider min={0} max={1} stepSize={0.01} value={value} disabled hideHandleOnEmpty />
        </Range>
      </Alter>
    );
  };

  const otherPlayers = _.reject(game.players, p => p._id === player._id);

  if (otherPlayers.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <p>
        <strong>There are {otherPlayers.length} other players:</strong>
      </p>
      {otherPlayers.map(renderSocialInteraction)}
    </Wrapper>
  );
};

export default SocialExposure;
