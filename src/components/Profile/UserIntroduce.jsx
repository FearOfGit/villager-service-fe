import React from 'react';
import { useQuery } from 'react-query';
import { myPageAPI } from '../../api/Users';
import UserContent from './UserContent';

function getUserInfo() {
  return myPageAPI().then((res) => res.data);
}

function UserIntroduce() {
  const { data } = useQuery('getInfo', getUserInfo);

  return (
    data && (
      <UserContent title="소개">
        <div>{data.introduce}</div>
      </UserContent>
    )
  );
}

export default UserIntroduce;
