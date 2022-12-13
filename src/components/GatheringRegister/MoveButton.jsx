import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsCheckLg,
} from 'react-icons/bs';
import { MoveButtonBlock } from './MoveButton.style';

function MoveButton({ step, onPrev, onNext }) {
  return (
    <MoveButtonBlock>
      <button type="button" className="btn--prev" onClick={onPrev}>
        <BsFillCaretLeftFill />
      </button>
      <button
        type="button"
        className="btn--next"
        onClick={() => onNext('gatheringName')}
      >
        {step === 6 ? <BsCheckLg /> : <BsFillCaretRightFill />}
      </button>
    </MoveButtonBlock>
  );
}

export default MoveButton;
