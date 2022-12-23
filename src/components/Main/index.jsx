import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { FiPlus } from 'react-icons/fi';
import MyGatheringList from './MyGatheringList';
import { MainTemplate, RegisterButton } from './index.style';
import MyImage from './MyImage';
import GatheringList from './GatheringList';

function Main() {
  const { name } = useSelector((state) => state.location.value);
  const navigate = useNavigate();

  return (
    <MainTemplate>
      <div className="user-info">
        <MyGatheringList />
        <MyImage />
      </div>
      <RegisterButton type="button" onClick={() => navigate('/register')}>
        <FiPlus />
      </RegisterButton>
      {/* <Map /> */}
      <Suspense fallback={<div>로딩중...</div>}>
        <GatheringList />
      </Suspense>
    </MainTemplate>
  );
}

export default Main;
