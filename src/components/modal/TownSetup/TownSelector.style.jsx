import styled, { css } from 'styled-components';

export const TownSelectorWrapper = styled.div`
  .select {
    position: relative;
    border: 1px solid black;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .name {
    font-size: 0.5rem;
  }
  .btn--setting {
    position: absolute;
    right: -7px;
    top: -10px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #4ab7b6;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edit {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 130px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 2rem;
    input {
      flex: 1;
      padding: 0.5rem;
    }
    button {
      margin-left: 0.5rem;
    }
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.select &&
    css`
      background-color: #fdaa5f;
    `}
`;
