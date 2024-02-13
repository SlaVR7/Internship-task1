import * as yup from 'yup';

export const validationSchema = (countries: string[]) =>
  yup.object({
    name: yup
      .string()
      .required()
      .matches(/^[А-ЯA-Z]/, 'first letter must be capitalize'),
    age: yup
      .string()
      .required()
      .matches(/^-?\d+$/, 'age must be a number')
      .matches(/^[1-9]\d*$/, 'age must be a positive'),
    email: yup
      .string()
      .required()
      .email('email is not valid')
      .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'email is not valid'),
    password: yup
      .string()
      .required()
      .matches(/^(?=.*[а-яa-z])/, 'lowercase letter must be present')
      .matches(/(?=.*[А-ЯA-Z])/, 'capital letter must be present')
      .matches(/(?=.*\d)/, 'number must be present')
      .matches(/(?=.*[@$!();-=№#"%*?&])/, 'special character must be present')
      .matches(/.{8,}/, 'at least 8 characters long'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), undefined], 'passwords must match')
      .required('confirm password is required'),
    gender: yup
      .string()
      .oneOf(['male', 'female'], 'please select a valid gender')
      .required('gender is required'),
    accept: yup.boolean().oneOf([true], 'you must accept it'),
    file: yup
      .mixed<File>()
      .required('file is required')
      .test('fileFormat', 'file must be a jpeg or png', (value) => {
        if (!value) return true;

        const acceptedFormats = ['image/jpeg', 'image/png'];
        return acceptedFormats.includes(value.type);
      })
      .test('fileSize', 'file size must be less than 500 KB', (value) => {
        if (!value) return true;

        const maxSizeInBytes = 500 * 1024;
        return value.size <= maxSizeInBytes;
      }),
    country: yup.string().required().oneOf(countries, 'this country does not exist'),
    bio: yup
      .string()
      .required()
      .matches(/^.{1,200}$/, 'no more than 200 characters'),
  });
