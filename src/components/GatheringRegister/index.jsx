import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { gatheringRegisterAPI } from '../../api/gathering';
import { constantForForm } from './lib/constants';
import { GatheringRegisterTemplate } from './index.style';
import Question from './Question';
import NameInput from './NameInput';
import PlaceInput from './PlaceInput';
import DescInput from './DescInput';
import DateInput from './DateInput';
import OthersInput from './OthersInput';
import TagBox from './TagBox';
import MoveButton from './MoveButton';

let isMap = false;

function GatheringRegister() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [tagList, setTagList] = useState([]);
  const { getFieldProps, errors, values, setFieldValue, handleSubmit } =
    useFormik({
      initialValues: constantForForm.INITIAL_VALUES,
      validationSchema: constantForForm.VALIDATION_SCHEMA,
      onSubmit: async (result) => {
        const body = {
          partyName: result.name,
          score: result.mannerScore,
          startDt: result.start_date,
          endDt: result.end_date,
          amount: result.fee,
          numberPeople: result.capacity,
          location: result.place_text,
          latitude: Number(result.latitude),
          longitude: Number(result.longitude),
          content: result.description,
          tagList: [...tagList],
        };
        const response = await gatheringRegisterAPI(body);
        console.log(response);
        navigate('/');
      },
    });

  const setEndDate = (date) => {
    setFieldValue('end_date', date, true);
  };

  const onPrev = () => {
    if (step === 0) return;
    setStep(step - 1);
  };

  const onNext = () => {
    if (step === 5) {
      handleSubmit();
      return;
    }
    setStep(step + 1);
  };

  const addTag = (newTag) => {
    if (!tagList.includes(newTag)) {
      setTagList([...tagList, { tagName: newTag }]);
    }
    setFieldValue('tag', '', true);
  };

  const removeTag = (target) => {
    const newTagList = tagList.filter((tag) => tag.tagName !== target);
    setTagList(newTagList);
  };

  if (step === 1) isMap = true;

  return (
    <GatheringRegisterTemplate>
      <form className="container">
        <div className="inner">
          <Question prev={step > 0} next={step < 0} title="모임명">
            <NameInput
              errMsg={errors.name}
              fieldProps={getFieldProps('name')}
            />
          </Question>
          <Question prev={step > 1} next={step < 1} title="장소">
            <PlaceInput
              errMsg={errors.place_text}
              fieldProps={getFieldProps('place_text')}
              setFieldValue={setFieldValue}
              isMap={isMap}
            />
          </Question>
          <Question prev={step > 2} next={step < 2} title="상세 설명">
            <DescInput
              errMsg={errors.description}
              fieldProps={getFieldProps('description')}
            />
          </Question>
          <Question prev={step > 3} next={step < 3} title="날짜">
            <DateInput
              startErrMsg={errors.start_date}
              endErrMsg={errors.end_date}
              startFieldProps={getFieldProps('start_date')}
              endFieldProps={getFieldProps('end_date')}
              startValue={values.start_date}
              endValue={values.end_date}
              setEndDate={setEndDate}
            />
          </Question>
          <Question prev={step > 4} next={step < 4} title="기타">
            <OthersInput
              capacityErrMsg={errors.capacity}
              scoreErrMsg={errors.mannerScore}
              feeErrMsg={errors.fee}
              capacityFieldProps={getFieldProps('capacity')}
              scoreFieldProps={getFieldProps('mannerScore')}
              feeFieldProps={getFieldProps('fee')}
            />
          </Question>
          <Question prev={step > 5} next={step < 5} title="태그">
            <TagBox
              tagList={tagList}
              fieldProps={getFieldProps('tag')}
              isActive={values.tag === '' || errors.tag !== undefined}
              errMsg={errors.tag}
              onAdd={() => addTag(values.tag)}
              onRemove={removeTag}
            />
          </Question>
        </div>
        <div className="btn-group">
          <MoveButton
            onPrev={onPrev}
            onNext={onNext}
            step={step}
            values={values}
            errors={errors}
            len={tagList.length}
          />
        </div>
      </form>
    </GatheringRegisterTemplate>
  );
}

export default GatheringRegister;
