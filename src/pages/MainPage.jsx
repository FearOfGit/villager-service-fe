import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Main from '../components/Main';

function MessageBox() {
  return <div>동네 설정을 해주세요</div>;
}

function MainPage() {
  const navigate = useNavigate();
  const myId = useSelector((state) => state.user.value.userId);
  useEffect(() => {
    if (!myId) {
      navigate('/signin');
    }
  }, []);

  return myId && <Main />;
}

export default MainPage;
