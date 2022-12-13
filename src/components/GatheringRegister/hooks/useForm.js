import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function useForm() {
  const formik = useFormik({
    initialValues: {
      gatheringName: '',
    },
    validationSchema: Yup.object({
      gatheringName: Yup.string()
        .min(2, 'too Short')
        .max(50, 'too Long')
        .required('required'),
    }),
    onSubmit: (values, actions) => {
      console.log(JSON.stringify(values, null, 2));
      console.log(actions);
    },
  });

  return {
    formik,
  };
}
