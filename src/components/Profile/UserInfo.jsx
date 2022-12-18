/* eslint-disable no-shadow */
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { followAPI, unfollowAPI } from '../../api/follow';
import ContentCounter from './ContentCounter';
import {
  ContentCounterWrapper,
  UserInfoWrapper,
  UserImage,
  PersonalInfo,
  EditButton,
} from './UserInfo.style';

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

function follow(id) {
  return followAPI(id).then((res) => res.data);
}

function unfollow(id) {
  return unfollowAPI(id).then((res) => res.data);
}

function getBtnText(isMe, isFriend) {
  if (isMe) {
    return '회원정보 수정';
  }
  if (!isFriend) {
    return '친구 맺기';
  }
  return '친구 끊기';
}

function UserInfo({ data, isMe, isFriend, searchId, handleFollow }) {
  const navigate = useNavigate();
  const btnText = getBtnText(isMe, isFriend);

  const followMutation = useMutation('follow', () => follow(searchId), {
    onSuccess: (result) => {
      console.log('follow 실행', result);
      handleFollow();
    },
  });

  const unfollowMutation = useMutation('unfollow', () => unfollow(searchId), {
    onSuccess: (result) => {
      console.log('unfollow 실행', result);
      handleFollow();
    },
  });

  const handleClick = (isMe, isFriend) => {
    if (isMe) {
      navigate('/profiledetail');
      return;
    }
    if (!isFriend) {
      followMutation.mutate();
      return;
    }
    unfollowMutation.mutate();
  };

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
          <EditButton type="button" onClick={() => handleClick(isMe, isFriend)}>
            {btnText}
          </EditButton>
        </UserInfoWrapper>
      )}
    </>
  );
}

export default UserInfo;
