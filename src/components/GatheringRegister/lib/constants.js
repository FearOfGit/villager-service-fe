import * as Yup from 'yup';

const today = new Date();
today.setHours(0, 0, 0, 0);

export const constantForForm = Object.freeze({
  INITIAL_VALUES: {
    name: '',
    place_text: '',
    latitude: '',
    longitude: '',
    description: '',
    start_date: '',
    end_date: '',
    capacity: 2,
    mannerScore: 50,
    fee: 0,
    tag: '',
  },
  VALIDATION_SCHEMA: Yup.object({
    name: Yup.string()
      .min(2, '모임명은 최소 2글자 이상입니다.')
      .max(30, '모임명은 최대 30글자 까지 가능합니다.')
      .required('모임명을 입력해주세요.'),
    place_text: Yup.string().required('장소를 선택해주세요.'),
    description: Yup.string()
      .min(5, '상세 설명은 최소 5글자 이상입니다.')
      .max(1000, '상세 설명은 최대 50글자 까지 가능합니다.')
      .required('상세 설명을 입력해주세요.'),
    start_date: Yup.date()
      .min(today, '과거의 날짜는 입력할 수 없습니다.')
      .required('모임 시작일을 지정해주세요.'),
    end_date: Yup.date()
      .min(Yup.ref('start_date'), '과거의 날짜는 입력할 수 없습니다.')
      .required('모임 종료일을 지정해주세요.'),
    capacity: Yup.number()
      .integer('정수를 입력해주세요.')
      .min(2, '인원수는 최소 2명 이상입니다.')
      .max(100, '인원수는 최대 100명 입니다.')
      .required('인원수를 입력해주세요.'),
    mannerScore: Yup.number()
      .positive('0 이상의 값을 입력해주세요.')
      .integer('정수를 입력해주세요.')
      .max(100, '100 이하 값을 입력해주세요.')
      .required('매너 점수를 입력해주세요.'),
    fee: Yup.number()
      .integer('정수를 입력해주세요.')
      .min(0, '0 이상의 값을 입력해주세요.')
      .required('참가비를 입력해주세요.'),
    tag: Yup.string(),
  }),
});
