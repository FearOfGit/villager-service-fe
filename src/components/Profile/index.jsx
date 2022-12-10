import { ProfileTemplate } from './index.style';
import UserContent from './UserContent';
import UserInfo from './UserInfo';

function Profile() {
  return (
    <ProfileTemplate>
      <UserInfo />
      <UserContent title="소개">
        <div>소개</div>
      </UserContent>
      <UserContent title="후기">
        <div>후기</div>
      </UserContent>
    </ProfileTemplate>
  );
}

export default Profile;
