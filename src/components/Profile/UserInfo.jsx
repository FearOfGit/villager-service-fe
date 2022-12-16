import { useNavigate } from 'react-router-dom';
import ContentCounter from './ContentCounter';
import { CounterWrapper, UserInfoBlock } from './UserInfo.style';

const contents = ['모임', '게시글', '팔로워', '팔로잉'];

function UserInfo() {
  const navigate = useNavigate();

  return (
    <UserInfoBlock>
      <div className="basic">
        <img
          className="user-img"
          src="https://via.placeholder.com/90"
          alt="사용자 이미지"
        />
        <div className="user-personal-info">
          <span className="user-nickname">닉네임</span>
          <span className="user-email">(이메일)</span>
          <div className="user-favorites">
            <span>#관심태그</span>
            <span>#관심태그</span>
            <span>#관심태그</span>
          </div>
        </div>
      </div>
      <CounterWrapper>
        {contents.map((content) => (
          <ContentCounter
            className="content-counter"
            key={content}
            title={content}
            count={0}
          />
        ))}
      </CounterWrapper>
      <button className="btn--user" type="button" onClick={()=>navigate('/profiledetail')}>
        회원정보 수정
      </button>
    </UserInfoBlock>
  );
}

export default UserInfo;
