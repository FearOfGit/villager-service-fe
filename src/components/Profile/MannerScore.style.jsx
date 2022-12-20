import styled from 'styled-components';

export const ScoreBar = styled.div`
  border: 1px solid #ccc;
  border-radius: 20px;
`;

export const ScoreValue = styled.div`
  border-radius: 20px;
  height: 30px;
  width: ${(props) => props.width};
  background-color: #4ab7b6;
  color: #fff;
  padding-right: 0.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
