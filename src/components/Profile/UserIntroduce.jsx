import React from 'react';
import UserContent from './UserContent';

function UserIntroduce({ data }) {
  return (
    data && (
      <UserContent title="소개">
        <div>{data.introduce}</div>
      </UserContent>
    )
  );
}

export default UserIntroduce;
