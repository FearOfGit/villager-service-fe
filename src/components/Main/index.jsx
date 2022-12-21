import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import MyGatheringList from './MyGatheringList';
import { MainTemplate, RegisterButton } from './index.style';
import MyImage from './MyImage';
import Preview from './Preview';
import Map from '../Map/Map';
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
        등록
      </RegisterButton>
      {/* <Map /> */}
      <Suspense fallback={<div>로딩중...</div>}>
        <GatheringList />
      </Suspense>
      {/* <Preview title="내 동네 인기 모임" /> */}
    </MainTemplate>
  );
}

export default Main;
