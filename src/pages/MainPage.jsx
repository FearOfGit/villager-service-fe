import { useSelector } from 'react-redux';
import Main from '../components/Main';

function MessageBox() {
  return <div>동네 설정을 해주세요</div>;
}

function MainPage() {
  const towns = useSelector((state) => state);
  console.log(towns);
  return <Main />;
}

export default MainPage;
