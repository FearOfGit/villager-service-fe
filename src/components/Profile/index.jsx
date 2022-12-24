import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { myPageAPI } from '../../api/Users';
import { ProfileTemplate } from './index.style';
import MannerScore from './MannerScore';
import UserInfo from './UserInfo';
import UserIntroduce from './UserIntroduce';
import TagBox from './TagBox';

function getUserInfo(id) {
  return myPageAPI(id).then((res) => res.data);
}

function Profile() {
  const myId = useSelector((state) => state.user.value.userId);
  const { id: searchId } = useParams();
  const { data, refetch } = useQuery(
    ['getInfo', searchId],
    () => getUserInfo(searchId),
    {
      suspense: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  );
  const [isFriend, setIsFriend] = useState(false);
  const [followerCount, setFollowerCount] = useState(data.follower);
  const isMe = String(myId) === String(searchId);
  const handleFollow = (value) => {
    setIsFriend(!isFriend);
    setFollowerCount(followerCount + value);
  };
  useEffect(() => {
    setIsFriend(data.followState);
    setFollowerCount(data.follower);
  }, [searchId]);

  return (
    <ProfileTemplate>
      <div className="inner">
        <UserInfo
          data={data}
          isFriend={isFriend}
          isMe={isMe}
          followerCount={followerCount}
          handleFollow={handleFollow}
          searchId={searchId}
        />
        <UserIntroduce data={data} />
        <MannerScore data={data} />
        <TagBox data={data} refetch={refetch} />
      </div>
    </ProfileTemplate>
  );
}

export default Profile;
