import styled from 'styled-components';

export const TagBoxBlock = styled.div`
  .input {
    width: 70%;
    padding: 0.5rem;
    border: 1px solid #4ab7b6;
    border-radius: 10px;
  }
  .tag {
    margin-top: 0.5rem;
    display: flex;
    font-size: 0.6rem;
    span {
      display: block;
      background-color: #4ab7b6;
      padding: 0.5rem;
      border-radius: 15px;
      color: #fff;
    }
    span + span {
      margin-left: 0.3rem;
    }
  }
`;
