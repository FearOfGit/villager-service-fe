import { GatheringNameInputBlock } from './GathringNameInput.style';
import useForm from './hooks/useForm';

function GatheringNameInput() {
  const { formik } = useForm();

  return (
    <GatheringNameInputBlock>
      <input
        id="gatheringName"
        type="text"
        className="input"
        {...formik.getFieldProps('gatheringName')}
      />
      <div>{formik.errors.gatheringName}</div>
    </GatheringNameInputBlock>
  );
}

export default GatheringNameInput;
