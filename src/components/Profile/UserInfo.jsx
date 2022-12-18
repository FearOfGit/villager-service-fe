import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { myPageAPI } from '../../api/Users';
import ContentCounter from './ContentCounter';
import { CounterWrapper, UserInfoBlock } from './UserInfo.style';

function UserInfo() {
  const navigate = useNavigate();
  const contents = ['모임', '게시글', '팔로워', '팔로잉'];

  function getUserInfo() {
    return myPageAPI().then((res) => res.data);
  }

  const { data } = useQuery('getInfo', getUserInfo);
  console.log(data);
  return (
    <>
      {data && (
        <div>
          <UserInfoBlock>
            <div className="basic">
              <img
                className="user-img"
                src="https://via.placeholder.com/90"
                alt="사용자 이미지"
              />
              <div className="user-personal-info">
                <span className="user-nickname">{data.nickName}</span>
                <span className="user-email">{data.email}</span>
                <div className="user-favorites">
                  <span>{data.tags[0]}</span>
                  <span>{data.tags[1]}</span>
                  <span>{data.tags[2]}</span>
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
            <button
              className="btn--user"
              type="button"
              onClick={() => navigate('/profiledetail')}
            >
              회원정보 수정
            </button>
          </UserInfoBlock>
        </div>
      )}
    </>
  );
}

export default UserInfo;
