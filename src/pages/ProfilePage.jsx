import { Suspense } from 'react';
import Profile from '../components/Profile';

function ProfilePage() {
  return (
    <Suspense fallback={<div>로딩중....</div>}>
      <Profile />
    </Suspense>
  );
}

export default ProfilePage;
