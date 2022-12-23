/* eslint-disable no-undef */
import { useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/common/Header';
import Navigator from '../components/common/Navigator';
import Responsive from '../components/common/Responsive';

function Root() {
  const myId = useSelector((state) => state.user.value.userId);

  useEffect(() => {
    if (!myId) return;
    console.log('EventSource');
    let source = null;

    function stop() {
      if (source != null) {
        source.close();
        console.log('close EventSource');
        source = null;
      }
    }

    function start() {
      source = new EventSource(
        // 알림 구독
        `http://devwinter.com:8081/subscribe/${myId}`,
      );

      source.onopen = (e) => {
        console.log('open');
      };

      // 모임 생성 후 알림 이벤트
      // 관심태그 알림받기
      source.addEventListener('party-create', (e) => {
        console.log(e.data);
      });
      source.onerror = (err) => {
        console.log('on err: ', err);
        stop();
      };
    }

    $(document).ready(() => {
      start();
    });
    $(window).on('unload', () => {
      stop();
    });
  }, []);

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
