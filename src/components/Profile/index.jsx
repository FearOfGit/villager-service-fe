import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { myPageAPI } from '../../api/Users';
import { ProfileTemplate } from './index.style';
import MannerScore from './MannerScore';
import UserInfo from './UserInfo';
import UserIntroduce from './UserIntroduce';

function getUserInfo(id) {
  return myPageAPI(id).then((res) => res.data);
}

function Profile() {
  const myId = useSelector((state) => state.user.value.userId);
  const { id: searchId } = useParams();
  const { data } = useQuery(
    ['getInfo', searchId],
    () => getUserInfo(searchId),
    {
      suspense: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  );
  const [isFriend, setIsFriend] = useState(data.followState);
  const isMe = String(myId === searchId);
  const handleFollow = () => {
    setIsFriend(!isFriend);
  };

  console.log(data);

  return (
    <ProfileTemplate>
      <div className="inner">
        <UserInfo
          birth={data.birth}
          email={data.email}
          gender={data.gender}
          nickname={data.nickname}
          isFriend={isFriend}
          isMe={isMe}
          handleFollow={handleFollow}
          data={data}
          searchId={searchId}
        />
        <UserIntroduce data={data} />
        <MannerScore data={data} />
      </div>
    </ProfileTemplate>
  );
}

export default Profile;
