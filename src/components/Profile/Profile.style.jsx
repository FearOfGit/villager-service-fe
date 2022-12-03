import styled from 'styled-components';
import palette from '../../lib/palette';

export const ProfileTemplate = styled.div`
  margin-top: 1.5rem;
  .title {
    letter-spacing: 2px;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid ${palette.gray[5]};
  }
  .content {
    background-color: ${palette.gray[3]};
    height: 100px;
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  background-color: #4ab7b6;
  padding: 0.5rem;
  border-radius: 7px;

  .info {
    display: flex;
    align-items: center;
  }

  .left {
    display: flex;
    flex: 2;
  }
  .nickname {
    font-size: 1.2rem;
  }
  .email {
    font-size: 0.9rem;
    margin-top: 0.2rem;
  }
  .tag li {
    display: inline-block;
    & + li {
      margin-left: 0.25rem;
    }
  }
`;

export const UserImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  flex-shrink: 0;
  background: url('https://via.placeholder.com/80');
`;

export const UserDescription = styled.div`
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #fff;
  font-size: 12px;
  /* background-color: blue; */
  .tag {
    margin-top: 0.7rem;
    display: flex;
    word-wrap: break-word;
  }
`;

export const Counter = styled.div`
  background: ${palette.gray[3]};
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  height: 70px;
  Button {
    position: relative;
    flex: 1;
  }
  Button + Button::before {
    content: '';
    height: 20px;
    position: absolute;
    left: -1%;
    top: 35%;
    border-left: 1px solid black;
  }
`;

export const Introduce = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

export const Review = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;
