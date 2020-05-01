import React from 'react';
import styled from 'styled-components';

import PlayerProfile from './PlayerProfile';
import SocialExposure from './SocialExposure';
import Task from './Task';

const RoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const RoundContent = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
`;

const Round = ({ round, stage, player, game }) => {
  return (
    <RoundWrapper>
      <RoundContent>
        <PlayerProfile player={player} stage={stage} game={game} />
        <Task game={game} round={round} stage={stage} player={player} />
        <SocialExposure stage={stage} player={player} game={game} />
      </RoundContent>
    </RoundWrapper>
  );
};

export default Round;
