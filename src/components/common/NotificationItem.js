/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BiMap } from 'react-icons/bi';
import { removeAlert } from '../../store/alert';

export const ItemBlock = styled.li`
  display: flex;
  max-height: 80px;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
`;

export const Circle = styled.div`
  max-width: 40px;
  max-height: 40px;
  background-color: #4ab7b6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  flex: 1;
  flex-shrink: 0;
  margin-right: 0.6rem;
  .ico {
    font-size: 1.5rem;
    color: #fff;
  }
`;

export const Contents = styled.div`
  flex: 2;
  h4 {
    font-size: 0.8rem;
    font-weight: 700;
  }
  .party-name {
    font-size: 0.8rem;
    display: block;
    margin-bottom: 0.5rem;
  }
  .tag {
    font-size: 0.7rem;
  }
`;

function NotificationItem({ alert, setIsOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = () => {
    setIsOpen(false);
    dispatch(removeAlert(alert.partyId));
    navigate(`/gathering/${alert.partyId}`);
  };
  return (
    <ItemBlock onClick={() => onClick(alert.partyId)}>
      <Circle>
        <BiMap className="ico" />
      </Circle>
      <Contents>
        <h4>사용자 추천 모임</h4>
        <span className="party-name">{alert.partyName}</span>
        <span className="tag">{alert.tag}</span>
      </Contents>
    </ItemBlock>
  );
}

export default NotificationItem;
