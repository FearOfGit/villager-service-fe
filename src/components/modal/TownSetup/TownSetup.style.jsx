import styled, { css } from 'styled-components';
import Responsive from '../../common/Responsive';
import palette from '../../../lib/palette';

export const TownSetupModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  visibility: hidden;
  transform: translateY(100%);
  transition: transform 0.5s;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: #fff;

  ${(props) =>
    props.show &&
    css`
      visibility: visible;
      transform: translateY(0);
    `}
`;

export const Inner = styled(Responsive)``;

export const Header = styled.div`
  height: 4rem;
  border-bottom: 1px solid ${palette.gray[1]};
  display: flex;
  align-items: center;
  .inner {
    position: relative;
    display: flex;
    justify-content: center;
  }
  .btn {
    position: absolute;
    left: 3%;
  }
`;

export const TownList = styled.ul`
  /* margin-top: 1rem; */
  .inner {
    padding: 0;
  }
  li {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${palette.gray[2]};
    padding: 0 1rem;
    .title {
      flex: 10;
      margin-left: 0.5rem;
    }
    .remove {
      color: red;
      flex: 1;
    }
    .plus {
      width: 100%;
      height: 100%;
    }
  }
`;
