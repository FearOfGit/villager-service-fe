import styled from 'styled-components';

export const UserInfoBlock = styled.div`
  position: relative;
  width: 100%;
  background-color: #4ab7b6;
  padding: 1rem;
  border-radius: 7px;
  .basic {
    display: flex;
  }
  .user-img {
    border-radius: 50%;
  }
  .user-personal-info {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    .user-nickname {
      font-size: 1.1rem;
    }
    .user-favorites {
      font-size: 0.5rem;
      margin-top: 1rem;
    }
  }
  .btn--user {
    font-size: 0.5rem;
    font-weight: 700;
    padding: 0.5rem;
    position: absolute;
    right: 8px;
    top: 8px;
    border-radius: 5px;
    border: none;
  }
`;

export const CounterWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 1rem 0.2rem;
`;
