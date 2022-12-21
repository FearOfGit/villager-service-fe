/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { VscBell } from 'react-icons/vsc';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { logOutAPI } from '../../api/Users';
import Button from './Button';
import Responsive from './Responsive';
import TownSetup from '../modal/TownSetup';
import { setUserId } from '../../store/User';
import { removeRefreshToken } from '../../app/Cookie';
import { getTownAPI } from '../../api/Town';

const HeaderBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 10;
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
    cursor: pointer;
    &:hover {
      color: #fdaa5f;
    }
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
  console.log('Header');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myId = useSelector((state) => state.user.value.userId);
  const [isTownSetupModal, setTownSetupModal] = useState(false);

  const handleLogOut = () => {
    logOutAPI().then((res) => {
      localStorage.removeItem('expiresAt');
      localStorage.removeItem('access_token');
      localStorage.removeItem('persist:root');
      dispatch(setUserId(null));
      removeRefreshToken();
      console.log(res);
      navigate('/signin');
    });
  };

  return (
    <>
      <TownSetup
        show={isTownSetupModal && myId}
        onClose={() => setTownSetupModal(false)}
      />
      <HeaderBlock>
        <Inner>
          <div className="logo">
            {myId ? (
              <span className="orange" onClick={() => setTownSetupModal(true)}>
                연남동
              </span>
            ) : (
              <span className="orange">동네</span>
            )}
            #람들
          </div>
          <div className="other">
            {!myId ? (
              <Button onClick={() => navigate('/signin')}>로그인</Button>
            ) : (
              <>
                <Button onClick={handleLogOut}>로그아웃</Button>
                <div className="bell">
                  <VscBell />
                </div>
              </>
            )}
          </div>
        </Inner>
      </HeaderBlock>
      <Spacer />
    </>
  );
}

export default Header;
