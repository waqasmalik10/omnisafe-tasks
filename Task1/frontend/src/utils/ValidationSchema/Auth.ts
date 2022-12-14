import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required'),
    surname: Yup.string()
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Too short!').required('Required')
});

export const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Please, enter your email'),
    password: Yup.string().min(8, 'Too short!').required('Please, enter your password'),
});