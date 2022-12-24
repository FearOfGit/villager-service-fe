import styled from 'styled-components';

export const SubTitle = styled.h3`
  color: #000;
  font-size: 1rem;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  &:last-child {
    margin-bottom: 0;
  }
  .user {
    color: #000;
    font-size: 1rem;
  }
`;

export const DescWrapper = styled.div`
  .desc {
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const Content = styled.div`
  font-size: 0.9rem;
  margin-left: 0.5rem;
`;
