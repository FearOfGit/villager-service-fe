/* eslint-disable no-shadow */
import { useState, useEffect, useRef } from 'react';
import {
  RegisterTemplate,
  InputTitleSection,
  InputLocationSection,
  InputEndDateSection,
  InputConstraintsSection,
  InputContentSection,
  InputTagSection,
} from './Register.style';
import Button from '../common/Button';

function Register() {
  const [step, setStep] = useState(1);
  const pivotEl = useRef();
  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() + 1));
  const minDate = `${tomorrow.getFullYear()}-${
    tomorrow.getMonth() + 1
  }-${tomorrow.getDate()}`;

  useEffect(() => {
    if (pivotEl.current) {
      pivotEl.current.scrollIntoView(true);
    }
  }, [step]);

  const onNext = () => {
    setStep((step) => step + 1);
  };
  return (
    <RegisterTemplate>
      {step >= 1 && (
        <InputTitleSection>
          <h2 className="title">모임 이름을 입력하세요.</h2>
          <input className="input" type="text" placeholder="모임명" />
        </InputTitleSection>
      )}
      {step >= 2 && (
        <InputLocationSection>
          <h2 className="title">모임 장소를 입력하세요.</h2>
          <div className="map">지도</div>
        </InputLocationSection>
      )}
      {step >= 3 && (
        <InputEndDateSection>
          <h2 className="title">모임 종료일을 입력하세요.</h2>
          <div className="date-picker">
            <input type="date" min={minDate} />
          </div>
        </InputEndDateSection>
      )}
      {step >= 4 && (
        <InputConstraintsSection>
          <h2 className="title">가입 제약조건을 입력하세요.</h2>
          <div className="constraints">제약 조건</div>
        </InputConstraintsSection>
      )}
      {step >= 5 && (
        <InputContentSection>
          <h2 className="title">모임 내용을 입력하세요.</h2>
          <textarea
            className="input"
            placeholder="내용을 입력하세요."
            rows="15"
          />
        </InputContentSection>
      )}
      {step >= 6 && (
        <InputTagSection>
          <h2 className="title">태그를 입력하세요.</h2>
          <input className="input" type="text" placeholder="태그" />
        </InputTagSection>
      )}
      <div className="pivot" ref={pivotEl}>
        <Button onClick={onNext}>확인</Button>
      </div>
    </RegisterTemplate>
  );
}

export default Register;
