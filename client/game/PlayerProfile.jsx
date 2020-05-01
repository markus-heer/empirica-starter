import React from 'react';

import styled from 'styled-components';
import Timer from './Timer';
import { Avatar } from '../shared/StyledComponents';

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 24rem;
  min-height: 100%;
  align-items: center;
  padding: 3rem 4rem;
`;

const Score = styled.div`
  text-align: center;
`;

const ScoreNumber = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;

const PlayerProfile = ({ player, stage }) => {
  const renderProfile = () => (
    <Score>
      <h3>Your Profile</h3>
      <Avatar src={player.get('avatar')} alt="avatar" />
    </Score>
  );

  const renderScore = () => (
    <Score>
      <h4>Total score</h4>
      <ScoreNumber>{(player.get('score') || 0).toFixed(2)}</ScoreNumber>
    </Score>
  );

  return (
    <Wrapper>
      {renderProfile()}
      {renderScore()}
      <Timer stage={stage} />
    </Wrapper>
  );
};

export default PlayerProfile;
