import styled from 'styled-components';

export const PreviewBlock = styled.div`
  margin-top: 2rem;
  .title {
    font-size: 1.2rem;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid black;
  }
  .details {
    margin-top: 2px;
    width: 10px;
    height: 10px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    transform: rotate(45deg);
  }
`;

export const List = styled.ul`
  .item {
    padding-top: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
