import styled from 'styled-components';
import palette from '../../lib/palette';

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  border-bottom: 1px solid black;
  padding: 0.5rem 0;
`;

export const MyListWrapper = styled.div`
  li {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
  }
  .location {
    font-size: 0.7rem;
    color: ${palette.gray[6]};
  }
  .name {
    margin-top: 0.1rem;
  }
  .ico {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
  }
`;
