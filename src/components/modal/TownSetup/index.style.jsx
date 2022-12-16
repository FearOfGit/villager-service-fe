import styled, { css } from 'styled-components';
import Responsive from '../../common/Responsive';

export const TownSetupWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  visibility: hidden;
  transform: translateY(100%);
  transition: transform 0.5s;
  width: 100%;
  height: 100%;
  z-index: 11;
  background: #fff;

  ${(props) =>
    props.show &&
    css`
      visibility: visible;
      transform: translateY(0);
    `}
`;

export const ContentWrapper = styled(Responsive)`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  .town-area {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
    padding: 1rem;
  }
  .town {
    position: relative;
    width: 100%;
    border-radius: 10px;
    border: 1px solid black;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & + .town {
      margin-left: 1rem;
    }
    .name {
      font-size: 0.5rem;
    }
    .setting {
      position: absolute;
      right: -10px;
      top: -10px;
      width: 30px;
      height: 30px;
      background-color: #4ab7b6;
      color: #fff;
      border-radius: 50%;
      border: none;
      outline: none;
      font-size: 0.1rem;
      padding: 0;
    }
  }
  .town-wrapper {
    width: 100%;
    & + .town-wrapper {
      margin-left: 1rem;
    }
  }
`;
