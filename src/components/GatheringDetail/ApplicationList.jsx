/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ApplicationListAPI } from '../../api/gathering';
import { ListBlock } from './ApplicationList.style';

function ApplicationList({ searchId }) {
  const navigate = useNavigate();
  const { data } = useQuery(
    ['getApplicationList', searchId],
    () => ApplicationListAPI(searchId),
    {
      suspense: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ListBlock>
      {data.data.content.map(
        (user) =>
          !user.accept && (
            <li
              key={user.id}
              onClick={() => navigate(`/profile/${user.targetMemberId}`)}
            >
              <span>User#{user.targetMemberId}</span>
              <button type="button">승인</button>
            </li>
          ),
      )}
      <li>
        <span>User#example</span>
        <button type="button">승인</button>
      </li>
      <li>
        <span>User#example</span>
        <button type="button">승인</button>
      </li>
      <li>
        <span>User#example</span>
        <button type="button">승인</button>
      </li>
    </ListBlock>
  );
}

export default ApplicationList;
