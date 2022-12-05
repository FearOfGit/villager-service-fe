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

export const Inner = styled(Responsive)`
  overflow: hidden;
`;

export const Header = styled.div`
  height: 4rem;
  border-bottom: 1px solid ${palette.gray[1]};
  display: flex;
  align-items: center;
  .header__inner {
    position: relative;
    display: flex;
    justify-content: center;
  }
  .header__title {
    font-size: 1.2rem;
  }
  .btn--close {
    position: absolute;
    left: 3%;
  }
`;

export const MyTownList = styled.ul`
  .townItem {
    padding: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${palette.gray[2]};
    input {
      visibility: hidden;
    }
    .ico-check {
      color: ${palette.green[5]};
    }
    .townItem__title {
      flex: 2;
      padding-left: 1.2rem;
    }
    .btn--edit,
    .btn--remove {
      font-size: 0.7rem;
    }
    .btn--edit {
      color: ${palette.gray[5]};
    }
    .btn--remove {
      color: ${palette.red[4]};
    }
    .bnt--add {
      width: 100%;
      height: 100%;
    }
  }
`;
