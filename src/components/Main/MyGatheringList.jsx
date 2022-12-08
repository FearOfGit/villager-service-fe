import { MyGatheringListBlock, List } from './MyGatheringList.style';

function MyGatheringList() {
  return (
    <MyGatheringListBlock>
      <h3 className="title">내 모임 목록</h3>
      <List>
        <li className="item">
          <span className="g-name">연남동 풋살팟</span>
          <div className="details" />
        </li>
        <li className="item">
          <span className="g-name">연남동 풋살팟</span>
          <div className="details" />
        </li>
        <li className="item">
          <span className="g-name">연남동 풋살팟</span>
          <div className="details" />
        </li>
      </List>
    </MyGatheringListBlock>
  );
}

export default MyGatheringList;
