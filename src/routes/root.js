import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import Header from '../components/common/Header';
import Navigator from '../components/common/Navigator';
import Responsive from '../components/common/Responsive';

function Root() {
  const myId = useSelector((state) => state.user.value.userId);
  return (
    <>
      <Suspense fallback={<div>로딩중...</div>}>
        <Header />
      </Suspense>
      <Responsive className="content">
        <Outlet />
      </Responsive>
      {myId && <Navigator />}
    </>
  );
}

export default Root;
