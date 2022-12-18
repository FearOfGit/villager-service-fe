import React from 'react';
import { useQuery } from 'react-query';
import { myPageAPI } from '../../api/Users';
import { ScoreBar, ScoreValue } from './MannerScore.style';
import UserContent from './UserContent';

function getUserInfo() {
  return myPageAPI().then((res) => res.data);
}

function MannerScore() {
  const { data } = useQuery('getInfo', getUserInfo);

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
