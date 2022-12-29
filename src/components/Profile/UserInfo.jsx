/* eslint-disable react/no-array-index-key */
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
import UserIntroduce from './UserIntroduce';

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

function UserInfo({
  data,
  isMe,
  isFriend,
  searchId,
  followerCount,
  handleFollow,
}) {
  const navigate = useNavigate();
  const btnText = getBtnText(isMe, isFriend);

  const followMutation = useMutation('follow', () => follow(searchId), {
    onSuccess: (result) => {
      console.log('follow 실행', result);
      handleFollow(1);
    },
  });

  const unfollowMutation = useMutation('unfollow', () => unfollow(searchId), {
    onSuccess: (result) => {
      console.log('unfollow 실행', result);
      handleFollow(-1);
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
      <UserInfoWrapper>
        <div className="flex">
          <UserImage src="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTBfMTY1/MDAxNTkxNzQ2ODcyOTI2.Yw5WjjU3IuItPtqbegrIBJr3TSDMd_OPhQ2Nw-0-0ksg.8WgVjtB0fy0RCv0XhhUOOWt90Kz_394Zzb6xPjG6I8gg.PNG.lamute/user.png?type=w800" alt="사용자 이미지" />
          <PersonalInfo>
            <span className="nickname">
              {data.nickName} <span className="email">({data.email})</span>{' '}
            </span>
            <span className="small">
              {data.birth}, {data.gender}
            </span>
          </PersonalInfo>
        </div>
        <ContentCounterWrapper>
          {contents.map((content) => (
            <ContentCounter
              key={content.key}
              title={content.title}
              count={
                content.key === 'follower' ? followerCount : data[content.key]
              }
            />
          ))}
        </ContentCounterWrapper>
        <EditButton type="button" onClick={() => handleClick(isMe, isFriend)}>
          {btnText}
        </EditButton>
      </UserInfoWrapper>
    </>
  );
}

export default UserInfo;
