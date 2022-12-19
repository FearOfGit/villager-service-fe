import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/common/Header';
import Navigator from '../components/common/Navigator';
import Responsive from '../components/common/Responsive';

function Root() {
  const myId = useSelector((state) => state.user.value.userId);
  return (
    <>
      <Header />
      <Responsive className="content">
        <Outlet />
      </Responsive>
      {myId && <Navigator />}
    </>
  );
}

export default Root;
