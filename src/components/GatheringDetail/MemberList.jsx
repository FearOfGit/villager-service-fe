import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ListBlock, Title } from './MemberList.style';

function MemberList({ members }) {
  const navigate = useNavigate();

  return (
    <>
      <Title>현재 모임원</Title>
      <ListBlock>
        {members.map((member) => (
          <li key={member.memberId}>
            <span className="name">{member.memberName}</span>
            <div>
              <button
                className="btn-lookup"
                type="button"
                onClick={() => navigate(`/profile/${member.memberId}`)}
              >
                프로필 보기
              </button>
            </div>
          </li>
        ))}
      </ListBlock>
    </>
  );
}

export default MemberList;
