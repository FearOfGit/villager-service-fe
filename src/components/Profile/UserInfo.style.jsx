import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #4ab7b6;
  padding: 1rem;
  border-radius: 7px;
`;

export const UserImage = styled.img`
  border-radius: 50%;
`;

export const PersonalInfo = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  .nickname {
    font-size: 1.1rem;
  }
  .tags {
    font-size: 0.5rem;
    margin-top: 1rem;
  }
`;

export const ContentCounterWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 1rem 0.2rem;
`;

export const EditButton = styled.button`
  font-size: 0.5rem;
  font-weight: 700;
  padding: 0.5rem;
  position: absolute;
  right: 8px;
  top: 8px;
  border-radius: 5px;
  border: none;
`;
