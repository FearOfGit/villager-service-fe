/* eslint-disable jsx-a11y/label-has-associated-control */
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
  const [registerInfo, setRegisterInfo] = useState({
    gname: '',
  });
  const pivotEl = useRef();
  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() + 1));
  const minDate = `${tomorrow.getFullYear()}-${
    tomorrow.getMonth() + 1
  }-${tomorrow.getDate()}`;

  const onChange = (e) => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
  };
  console.log(registerInfo.gname);

  useEffect(() => {
    if (pivotEl.current) {
      pivotEl.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }, [step]);

  const onNext = (e) => {
    e.preventDefault();
    setStep((step) => step + 1);
  };

  return (
    <RegisterTemplate>
      <form>
        {step >= 1 && (
          <InputTitleSection>
            <label className="title">1. 모임 이름을 입력해주세요</label>
            <input
              className="input"
              value={registerInfo.gname}
              type="text"
              name="gname"
              placeholder="모임 이름"
              onChange={(e) => onChange(e)}
            />
          </InputTitleSection>
        )}
        {step >= 2 && (
          <InputLocationSection>
            <label className="title">2. 모임 장소를 입력해주세요</label>
            <div className="map">지도</div>
          </InputLocationSection>
        )}
        {step >= 3 && (
          <InputEndDateSection>
            <label className="title">3. 모임 종료일을 입력해주세요</label>
            <div className="date-picker">
              <input type="date" min={minDate} />
            </div>
          </InputEndDateSection>
        )}
        {step >= 4 && (
          <InputConstraintsSection>
            <label className="title">4. 모임 옵션을 입력해주세요</label>
            <div className="constraints">
              <span>제약 조건, 인원수, ...</span>
            </div>
          </InputConstraintsSection>
        )}
        {step >= 5 && (
          <InputContentSection>
            <label className="title">5. 모임 내용을 입력해주세요</label>
            <textarea
              className="input"
              placeholder="내용을 입력하세요."
              rows="15"
            />
          </InputContentSection>
        )}
        {step >= 6 && (
          <InputTagSection>
            <label className="title">6. 태그를 입력해주세요</label>
            <input className="input" type="text" placeholder="태그" />
          </InputTagSection>
        )}
        <div className="pivot" ref={pivotEl}>
          <Button onClick={(e) => onNext(e)}>확인</Button>
        </div>
      </form>
    </RegisterTemplate>
  );
}

export default Register;
