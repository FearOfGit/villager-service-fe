import { ProfileTemplate } from './index.style';
import UserContent from './UserContent';
import UserInfo from './UserInfo';

function Profile() {
  return (
    <ProfileTemplate>
      <div className="inner">
        <UserInfo />
        <UserContent title="소개">
          <div>소개</div>
        </UserContent>
        <UserContent title="매너 점수">
          <div className="manner-score-bar">
            <div className="manner-score-value">35</div>
          </div>
        </UserContent>
      </div>
    </ProfileTemplate>
  );
}

export default Profile;
