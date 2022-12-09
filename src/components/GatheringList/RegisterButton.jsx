import { RegisterButtonBlock } from './RegisterButton.style';
import Button from '../common/Button';

function RegisterButton() {
  return (
    <RegisterButtonBlock>
      <Button register to="/register">
        동네 모임 등록
      </Button>
    </RegisterButtonBlock>
  );
}

export default RegisterButton;
