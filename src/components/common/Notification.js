import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import NotificationItem from './NotificationItem';

export const NotificationWrapper = styled.div`
  padding: 1rem 0.6rem 0;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-bottom: 3rem;
  font-size: 0.8rem;
`;

export const Contents = styled.div`
  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
`;

function Notification({ setIsOpen }) {
  const alerts = useSelector((state) => state.alert.value.alert);
  console.log(alerts);
  return (
    <NotificationWrapper>
      <Title>알림</Title>
      <Contents>
        <h3>새 알림</h3>
        <ul>
          {alerts.map((alert) => (
            <NotificationItem
              key={alert.partyId}
              alert={alert}
              setIsOpen={setIsOpen}
            />
          ))}
        </ul>
      </Contents>
    </NotificationWrapper>
  );
}

export default Notification;
