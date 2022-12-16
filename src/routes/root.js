/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Navigator from '../components/common/Navigator';
import Responsive from '../components/common/Responsive';

function Root() {
  useEffect(() => {
    let source = null;

    function start() {
      source = new EventSource('/stocks/1234');
      console.log('create EventSource');
      source.onmessage = function (ev) {
        console.log('on message: ', ev.data);
        $('#stockValue').text(ev.data);
      };
      source.onerror = function (err) {
        console.log('on err: ', err);
        stop();
      };
    }

    function stop() {
      if (source != null) {
        source.close();
        console.log('close EventSource');
        source = null;
      }
    }

    $(document).ready(function () {
      start();
    });
    $(window).on('unload', function () {
      stop();
    });
  }, []);
  return (
    <>
      <Header />
      <Responsive className="content">
        <Outlet />
      </Responsive>
      <Navigator />
    </>
  );
}

export default Root;
