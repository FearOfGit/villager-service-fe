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

export const TownItemBlock = styled.li`
  .item {
    padding: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${palette.gray[2]};
    .name {
      flex: 2;
      padding-left: 1.2rem;
      label {
        cursor: pointer;
      }
      .hidden {
        visibility: hidden;
      }
    }
  }
  .ico-check {
    color: ${palette.green[5]};
  }
`;

export const ButtonGroup = styled.div`
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
`;

export const EditorBlock = styled.div`
  margin-top: 1rem;
  padding: 0 0.5rem;
  .input {
    width: 100%;
    display: flex;
    input {
      flex: 2;
    }
  }
  .btn--edit {
    margin-left: 0.25rem;
    background: ${palette.gray[3]};
  }
`;

export const MyTownList = styled.ul`
  .add {
    height: 50px;
    Button {
      width: 100%;
      height: 100%;
    }
  }
`;
