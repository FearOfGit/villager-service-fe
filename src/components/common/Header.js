import { VscBell } from 'react-icons/vsc';
import styled from 'styled-components';
import Button from './Button';
import Responsive from './Responsive';

const HeaderBlock = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Inner = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: #4ab7b6;
  }
  .orange {
    color: #fdaa5d;
  }
  .other {
    display: flex;
    align-items: center;
  }
  .bell {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

function Header() {
  return (
    <>
      <HeaderBlock>
        <Inner>
          <div className="logo">
            <span className="orange">연남동</span>#람들
          </div>
          <div className="other">
            <Button>로그인</Button>
            <div className="bell">
              <VscBell />
            </div>
          </div>
        </Inner>
      </HeaderBlock>
      <Spacer />
    </>
  );
}

export default Header;
