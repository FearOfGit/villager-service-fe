import React from 'react';
import { ScoreBar, ScoreValue } from './MannerScore.style';
import UserContent from './UserContent';

function MannerScore({ data }) {
  return (
    data && (
      <UserContent title="매너 점수">
        <ScoreBar>
          <ScoreValue width={`${data.mannerPoint}%`}>
            {data.mannerPoint}
          </ScoreValue>
        </ScoreBar>
      </UserContent>
    )
  );
}

export default MannerScore;
