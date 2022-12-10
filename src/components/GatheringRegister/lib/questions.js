import DatePicker from '../DatePicker';
import GatheringContentInput from '../GatheringContentInput';
import GatheringNameInput from '../GathringNameInput';
import TagBox from '../TagBox';

export const questions = [
  {
    step: 1,
    title: '모임명',
    child: <GatheringNameInput />,
  },
  {
    step: 2,
    title: '모임 장소',
    child: <div>모임 장소</div>,
  },
  {
    step: 3,
    title: '모임 종료일',
    child: <DatePicker />,
  },
  {
    step: 4,
    title: '모임 옵션',
    child: <div>모임 옵션</div>,
  },
  {
    step: 5,
    title: '모임 내용',
    child: <GatheringContentInput />,
  },
  {
    step: 6,
    title: '태그',
    child: <TagBox />,
  },
];
