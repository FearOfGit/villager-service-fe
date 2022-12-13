import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Template } from './index.style';
import MoveButton from './MoveButton';
import Map from './Map';
import Question from './Question';
import TagBox from './TagBox';

const arr = [
  'nickname',
  'place',
  'content',
  'capacity',
  'manner',
  'end',
  'tag',
];

const questions = [
  {
    step: 0,
    title: '모임명',
    name: 'nickname',
  },
  {
    step: 1,
    title: '장소',
    name: 'place',
  },
  {
    step: 2,
    title: '설명',
    name: 'content',
  },
  {
    step: 3,
    title: '인원수',
    name: 'capacity',
  },
  {
    step: 4,
    title: '매너점수',
    name: 'manner',
  },
  {
    step: 5,
    title: '종료일',
    name: 'end',
  },
  {
    step: 6,
    title: '태그',
    name: 'tag',
  },
];

function Register() {
  const [step, setStep] = useState(0);
  const [tagList, setTagList] = useState([]);
  const { getFieldProps, errors, values, setFieldValue, isSubmitting } =
    useFormik({
      initialValues: {
        nickname: '',
        place: '',
        content: '',
        capacity: 2,
        manner: 100,
        end: '',
        tag: '',
      },
      validationSchema: Yup.object({
        nickname: Yup.string()
          .min(2, '모임명은 최소 2글자 이상입니다.')
          .max(15, '최대 15글자')
          .required('모임명을 입력해주세요'),
        place: Yup.string()
          .min(2, '최소 2글자')
          .max(50, '최대 50글자')
          .required('Required'),
        content: Yup.string()
          .min(2, '최소 2글자')
          .max(50, '최대 50글자')
          .required('Required'),
        capacity: Yup.number().min(2, '2이상').max(50, '50이하'),
        manner: Yup.number().min(0, '0이상').max(100, '100이하'),
        end: Yup.date().min(new Date(), '과거의 날짜는 입력할 수 없습니다.'),
        tag: Yup.string()
          .min(2, '최소 2글자')
          .max(50, '최대 50글자')
          .required('최대 3개까지 입력할 수 있습니다.'),
      }),
    });

  const onPrev = () => {
    if (step === 0) return;
    setStep(step - 1);
  };

  const onNext = () => {
    if (step === 6) return;
    setStep(step + 1);
  };

  const addTag = (newTag) => {
    if (!tagList.includes(newTag)) {
      setTagList([...tagList, newTag]);
    }
    setFieldValue('tag', '', true);
  };

  const removeTag = (target) => {
    const newTagList = tagList.filter((tag) => tag !== target);
    setTagList(newTagList);
  };

  return (
    <Template>
      <form>
        {questions.map((q) => (
          <Question
            key={q.step}
            step={q.step}
            title={q.title}
            errMsg={errors[q.name]}
            fieldProps={getFieldProps(q.name)}
            prev={step > q.step}
            next={step < q.step}
          />
        ))}
        {step === 1 && (
          <Map
            value={values.place}
            setPlace={(value) => setFieldValue('place', value, true)}
          />
        )}
        {step === 6 && (
          <TagBox
            disabled={errors.tag !== undefined || values.tag === ''}
            name="tag"
            type="text"
            fieldProps={getFieldProps('tag')}
            tagList={tagList}
            onAdd={() => addTag(values.tag)}
            onRemove={removeTag}
          />
        )}
        <MoveButton
          step={step}
          last={step === 6}
          taglen={tagList.length}
          onPrev={onPrev}
          onNext={onNext}
          error={errors[arr[step]]}
          value={values[arr[step]]}
        />
      </form>
    </Template>
  );
}

export default Register;
