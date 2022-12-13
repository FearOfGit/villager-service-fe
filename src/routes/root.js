import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Navigator from '../components/common/Navigator';
import Responsive from '../components/common/Responsive';

function Root() {
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
