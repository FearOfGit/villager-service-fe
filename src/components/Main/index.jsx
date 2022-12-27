import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import { FiPlus } from 'react-icons/fi';
import MyGatheringList from './MyGatheringList';
import { MainTemplate, RegisterButton } from './index.style';
import GatheringList from './GatheringList';

function Main() {
  const navigate = useNavigate();

  return (
    <MainTemplate>
      <Suspense fallback={<div>로딩중...</div>}>
        <MyGatheringList />
      </Suspense>
      <RegisterButton type="button" onClick={() => navigate('/register')}>
        <FiPlus />
      </RegisterButton>
      <Suspense fallback={<div>로딩중...</div>}>
        <GatheringList />
      </Suspense>
    </MainTemplate>
  );
}

export default Main;
