import styled from 'styled-components';

export const MyGatheringListBlock = styled.div`
  background: #ebeff3;
  flex: 1;
  max-width: 400px;
  padding: 1rem;
  border-radius: 8px;
  .title {
    font-weight: 700;
    font-size: 1.2rem;
  }
`;

export const List = styled.ul`
  display: block;
  margin-top: 1rem;
  .item {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    & + .item {
      margin-top: 0.8rem;
    }
  }
  .g-name {
    display: flex;
    &::before {
      content: '';
      display: inline-block;
      width: 5px;
      height: 15px;
      margin-right: 0.3rem;
      background: red;
    }
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
