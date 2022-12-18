import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/common/Header';
import Navigator from '../components/common/Navigator';
import Responsive from '../components/common/Responsive';

function Root() {
  const userId = useSelector((state) => state.user.value.userId);
  console.log(userId);
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
