import { useFormik } from 'formik';

export default function useForm({ initialValues, validationSchema }) {
  const { values, errors, getFieldProps, setFieldValue, isSubmitting } =
    useFormik({
      initialValues,
      validationSchema,
    });

  return {
    values,
    errors,
    getFieldProps,
    setFieldValue,
  };
}
