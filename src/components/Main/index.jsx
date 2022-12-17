import MyGatheringList from './MyGatheringList';
import { MainTemplate } from './Main.style';
import MyImage from './MyImage';
import Preview from './Preview';
import Map from '../Map/Map';

function Main() {
  return (
    <MainTemplate>
      <div className="user-info">
        <MyGatheringList />
        <MyImage />
      </div>
      <Map/>
      <Preview title="내 동네 인기 모임" />
      <Preview title="내 동네 모임들" />
      <Preview title="즐겨찾기 모임" />
    </MainTemplate>
  );
}

export default Main;
