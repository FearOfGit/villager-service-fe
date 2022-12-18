import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { myPageAPI } from '../../api/Users';
import ContentCounter from './ContentCounter';
import {
  ContentCounterWrapper,
  UserInfoWrapper,
  UserImage,
  PersonalInfo,
  EditButton,
} from './UserInfo.style';

function UserInfo() {
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

  function getUserInfo() {
    return myPageAPI().then((res) => res.data);
  }

  const { data } = useQuery('getInfo', getUserInfo);
  console.log(data);
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
          <EditButton type="button" onClick={() => navigate('/profiledetail')}>
            회원정보 수정
          </EditButton>
        </UserInfoWrapper>
      )}
    </>
  );
}

export default UserInfo;
