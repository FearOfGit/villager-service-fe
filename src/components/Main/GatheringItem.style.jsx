import styled from 'styled-components';

export const ItemBlock = styled.li`
  border: 1px solid black;
  display: block;
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
  padding-right: 3.5rem;
  position: relative;
  .btn {
  }

  & + li {
    margin-top: 1rem;
  }
`;

export const GatheringTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
`;

export const Text = styled.span`
  font-size: 0.8rem;
  color: #303733;
`;

export const ContentText = styled.p`
  margin-top: 0.5rem;
  background-color: #f7f7f7;
  min-height: 100px;
  padding: 0.5rem;
  border-radius: 10px;
  font-size: 0.8rem;
  color: #303733;
`;

export const LocationWrapper = styled.div`
  display: flex;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.7rem;
    color: #b1b1b1;
    font-size: 0.7rem;
    span + span {
      display: inline-block;
      margin-top: 0.2rem;
      font-size: 0.9rem;
    }
  }
  .marker {
    width: 40px;
    height: 40px;
    background-color: #4ab7b6;
    border-radius: 50%;
  }
`;

export const TagWrapper = styled.div`
  font-size: 0.7rem;
  .like {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    font-size: 1.2rem;
    color: red;
  }
`;

export const JoinButton = styled.div`
  background-color: #ea7173;
  position: absolute;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  right: -103px;
  top: 100px;
  width: 239px;
  height: 35px;
  transform: rotate(-90deg);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;
