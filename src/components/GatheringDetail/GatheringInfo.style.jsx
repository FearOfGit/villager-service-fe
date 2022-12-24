import styled, { css } from 'styled-components';
import palette from '../../lib/palette';

export const GatheringName = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 0.7rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const LikeButton = styled.button`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  font-size: 1.7rem;
  font-weight: normal;
  color: red;
`;

export const JoinButton = styled.button`
  background: #4ab7b6;
  color: #fff;
  border-radius: 10px;
  padding: 0.5rem;
  border: none;
  font-size: 0.7rem;
  font-weight: normal;
  margin-left: 0.5rem;
`;

export const EditButton = styled.button`
  background: #4ab7b6;
  color: #fff;
  border-radius: 10px;
  padding: 0.5rem;
  border: none;
  font-size: 0.7rem;
  font-weight: normal;
  margin-left: 0.5rem;
`;

export const DestroyButton = styled.button`
  background: red;
  color: #fff;
  border-radius: 10px;
  padding: 0.5rem;
  border: none;
  font-size: 0.7rem;
  font-weight: normal;
  margin-left: 0.5rem;
`;

export const StateButtonWrapper = styled.div`
  position: fixed;
  top: 4.5rem;
  right: 5px;
  z-index: 100;
`;

export const StateButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  color: #fff;
  background-color: ${palette.green[5]};
  ${(props) =>
    props.red &&
    css`
      background-color: red;
    `}
`;

export const GatheringTagWrapper = styled.div`
  font-size: 0.7rem;
  display: flex;
  border-bottom: 1px solid black;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  .tag {
    margin-right: 0.5rem;
    padding: 0.4rem;
    border-radius: 20px;
    background-color: #fdaa5d;
  }
`;

export const MemberInfoWrapper = styled.div`
  margin-top: 0.5rem;
  max-height: 150px;
  overflow: auto;
  background-color: #fff;
  border: 1px solid #ccc;

  .leader,
  .member {
    &:nth-child(2n + 1) {
      background: #ccc;
    }

    font-size: 1.1rem;
    font-weight: 700;
    border-bottom: 1px solid black;
    padding: 1rem 0.5rem;
  }

  .leader {
    &::before {
      content: '👑';
      display: inline-block;
    }
  }

  .member {
    &::before {
      content: '🙂';
      display: inline-block;
    }
  }

  .manner {
    margin-left: 1rem;
    color: #4ab7b6;
  }
`;

export const PartyState = styled.div`
  background-color: ${palette.gray[4]};
  padding: 0.3rem;
  font-size: 0.7rem;
  border: none;
  border-radius: 20px;
  ${(props) =>
    props.state === 'START' &&
    css`
      background-color: ${palette.green[5]};
      color: #fff;
    `}

  ${(props) =>
    props.end === 'END' &&
    css`
      background-color: red;
      color: #fff;
    `}
`;
