import { ItemBlock } from './Item.style';

function Item() {
  return (
    <ItemBlock>
      <h3 className="title">제목</h3>
      <div className="sub-info">
        <span>날짜</span>
        <span>작성자</span>
      </div>
      <p className="content">본문...</p>
      <div className="extra-info">
        <div className="location">
          <div className="marker" />
          <div className="text">
            <span>위치1</span>
            <span>위치2</span>
          </div>
        </div>
        <div className="etc">
          <span>#태그#태그#태그</span>
          <div className="like">좋아요</div>
        </div>
      </div>
      <div className="btn">모임 신청하기</div>
    </ItemBlock>
  );
}

export default Item;
