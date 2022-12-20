import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import MyGatheringList from './MyGatheringList';
import { MainTemplate } from './Main.style';
import MyImage from './MyImage';
import Preview from './Preview';
import Map from '../Map/Map';

function Main() {
  const myId = useSelector((state) => state.user.value.userId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!myId) {
      console.log('move');
      navigate('/signin');
    }
  }, [myId]);

  return (
    <MainTemplate>
      <div className="user-info">
        <MyGatheringList />
        <MyImage />
      </div>
      <button type="button" onClick={() => navigate('/register')}>
        모임 등록
      </button>
      <Map />
      <Preview title="내 동네 인기 모임" />
      <Preview title="내 동네 모임들" />
      <Preview title="즐겨찾기 모임" />
    </MainTemplate>
  );
}

export default Main;
