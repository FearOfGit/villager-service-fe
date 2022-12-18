import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { myPageAPI } from '../../api/Users';
import { ProfileTemplate } from './index.style';
import MannerScore from './MannerScore';
import UserInfo from './UserInfo';
import UserIntroduce from './UserIntroduce';

function getUserInfo(id) {
  return myPageAPI(id).then((res) => res.data);
}

function Profile() {
  const { id: userId } = useParams();
  const { data } = useQuery(['getInfo', userId], () => getUserInfo(userId), {
    suspense: true,
  });

  console.log(data);

  return (
    <ProfileTemplate>
      <div className="inner">
        <UserInfo data={data} userId={userId} />
        <UserIntroduce data={data} />
        <MannerScore data={data} />
      </div>
    </ProfileTemplate>
  );
}

export default Profile;
