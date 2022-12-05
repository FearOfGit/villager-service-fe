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
  return (
    <>
      <Spacer />
      <NavigatorBlock>
        <Inner>
          <Button>모임</Button>
          <Button>게시판</Button>
          <Button>채팅</Button>
          <Button>랭킹</Button>
          <Button>마이페이지</Button>
        </Inner>
      </NavigatorBlock>
    </>
  );
}

export default Navigator;
