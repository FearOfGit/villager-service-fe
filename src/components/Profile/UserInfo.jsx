import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ContentCounter from './ContentCounter';
import {
  ContentCounterWrapper,
  UserInfoWrapper,
  UserImage,
  PersonalInfo,
  EditButton,
} from './UserInfo.style';

function UserInfo({ data, userId }) {
  const id = useSelector((state) => state.user.value.userId);
  const navigate = useNavigate();
  const contents = [
    {
      title: '모임',
      key: 'partyRegisterCount',
    },
    {
      title: '게시글',
      key: 'postRegisterCount',
    },
    {
      title: '팔로워',
      key: 'follower',
    },
    {
      title: '팔로잉',
      key: 'follow',
    },
  ];

  return (
    <>
      {data && (
        <UserInfoWrapper>
          <div className="flex">
            <UserImage
              src="https://via.placeholder.com/90"
              alt="사용자 이미지"
            />
            <PersonalInfo>
              <span className="nickname">{data.nickName}</span>
              <span className="email">{data.email}</span>
              <div className="tags">
                {data.tags.map((tag) => (
                  <span>{tag}</span>
                ))}
              </div>
            </PersonalInfo>
          </div>
          <ContentCounterWrapper>
            {contents.map((content) => (
              <ContentCounter
                key={content.key}
                title={content.title}
                count={data[content.key]}
              />
            ))}
          </ContentCounterWrapper>
          <EditButton
            type="button"
            disabled={data.followState}
            onClick={() => navigate('/profiledetail')}
          >
            {String(userId) === String(id) ? '회원정보 수정' : '팔로우'}
          </EditButton>
        </UserInfoWrapper>
      )}
    </>
  );
}

export default UserInfo;
