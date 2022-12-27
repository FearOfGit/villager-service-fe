import styled from 'styled-components';
import palette from '../../lib/palette';

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 1rem;
`;

export const ListBlock = styled.ul`
  margin-top: 1rem;
  max-height: 140px;
  overflow: auto;
  background-color: #fff;
  border: 1px solid black;
  li {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:nth-child(2n) {
      background: ${palette.gray[3]};
    }
  }

  button {
    background: transparent;
    color: #4ab7b6;
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
  }
`;
