import { useSelector } from 'react-redux';
import styled from 'styled-components';
import palette from '../../lib/palette';
import Button from './Button';
import Responsive from './Responsive';

const NavigatorBlock = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  border-top: 1px solid ${palette.gray[4]};
  z-index: 10;
`;

const Inner = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Spacer = styled.div`
  height: 4rem;
`;

function Navigator() {
  const userId = useSelector((state) => state.user.value.userId);
  return (
    <>
      <Spacer />
      <NavigatorBlock>
        <Inner>
          <Button to="/">모임</Button>
          <Button to="/board">게시판</Button>
          <Button>채팅</Button>
          <Button to="/rank">랭킹</Button>
          <Button to={`/profile/${userId}`}>마이페이지</Button>
        </Inner>
      </NavigatorBlock>
    </>
  );
}

export default Navigator;
