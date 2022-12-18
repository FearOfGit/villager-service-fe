import { ProfileTemplate } from './index.style';
import MannerScore from './MannerScore';
import UserInfo from './UserInfo';
import UserIntroduce from './UserIntroduce';

function Profile() {
  return (
    <ProfileTemplate>
      <div className="inner">
        <UserInfo />
        <UserIntroduce />
        <MannerScore />
      </div>
    </ProfileTemplate>
  );
}

export default Profile;
