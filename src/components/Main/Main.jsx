import MyGatheringList from './MyGatheringList';
import { MainTemplate } from './Main.style';
import MyImage from './MyImage';
import Preview from './Preview';

function Main() {
  return (
    <MainTemplate>
      <div className="user-info">
        <MyGatheringList />
        <MyImage />
      </div>
      <div className="map">지도</div>
      <Preview title="인기 모임들" />
      <Preview title="내 동네 모임들" />
      <Preview title="즐겨찾기 모임들" />
    </MainTemplate>
  );
}

export default Main;
