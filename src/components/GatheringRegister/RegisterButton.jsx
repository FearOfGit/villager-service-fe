import { useRef, useEffect } from 'react';
import { RegisterButtonBlock } from './RegisterButton.style';

function RegisterButton({ step, onNext }) {
  const pivotEl = useRef();

  useEffect(() => {
    pivotEl.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }, [step]);

  return (
    <RegisterButtonBlock>
      <button
        type="button"
        id="pivot"
        className="btn--next"
        ref={pivotEl}
        onClick={onNext}
      >
        {step === 6 ? '등록' : '다음'}
      </button>
    </RegisterButtonBlock>
  );
}

export default RegisterButton;
