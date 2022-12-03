import {
  ProfileTemplate,
  UserInfo,
  UserImage,
  UserDescription,
  Counter,
  Introduce,
  Review,
} from './Profile.style';
import Button from '../common/Button';

function Profile({ my }) {
  return (
    <ProfileTemplate>
      <UserInfo>
        <div className="info">
          <div className="left">
            <UserImage />
            <UserDescription>
              <span className="nickname">닉네임</span>
              <span className="email">이메일@naver.com</span>
              <ul className="tag">
                <li>#축구</li>
                <li>#토익</li>
                <li>#맛집</li>
              </ul>
            </UserDescription>
          </div>
          <div className="right">
            {my ? (
              <Button to="/" small="true">
                프로필 수정
              </Button>
            ) : (
              <Button small="true">follow</Button>
            )}
          </div>
        </div>
        <Counter>
          <Button>
            <div>모임</div>
            <div>0</div>
          </Button>
          <Button>
            <div>게시글</div>
            <div>0</div>
          </Button>
          <Button>
            <div>팔로워</div>
            <div>0</div>
          </Button>
          <Button>
            <div>팔로잉</div>
            <div>0</div>
          </Button>
        </Counter>
      </UserInfo>
      <Introduce>
        <h2 className="title">유저소개</h2>
        <div className="content">안녕하세요.</div>
      </Introduce>
      <Review>
        <h2 className="title">후기</h2>
        <div className="content">...</div>
      </Review>
    </ProfileTemplate>
  );
}

export default Profile;
