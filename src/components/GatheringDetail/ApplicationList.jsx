/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { acceptGatheringAPI, ApplicationListAPI } from '../../api/gathering';
import { ListBlock, Title } from './ApplicationList.style';

function ApplicationList({ searchId }) {
  const navigate = useNavigate();
  const { data, refetch } = useQuery(
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

  const onAccept = async (targetId) => {
    const response = await acceptGatheringAPI(searchId, targetId);
    console.log(response);
    refetch();
  };

  return (
    <>
      <Title>신청 목록</Title>
      <ListBlock>
        {data.data.content.map(
          (user) =>
            !user.accept && (
              <li key={user.id}>
                <span className="name">유저#{user.targetMemberId}</span>
                <div>
                  <button
                    className="btn-lookup"
                    type="button"
                    onClick={() => navigate(`/profile/${user.targetMemberId}`)}
                  >
                    프로필 보기
                  </button>
                  <button
                    type="button"
                    onClick={() => onAccept(user.targetMemberId)}
                  >
                    승인
                  </button>
                </div>
              </li>
            ),
        )}
      </ListBlock>
    </>
  );
}

export default ApplicationList;
