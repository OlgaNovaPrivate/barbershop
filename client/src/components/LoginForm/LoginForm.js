import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Formik} from 'formik';
import {
  Button,
  FormStyles,
  FieldStyles,
  ErrorMessageStyle,
  FieldWrap,
  FlexRow,
} from '../../styles';
import {UserContext} from '../../utils/context';

import * as Yup from 'yup';

const handleSubmit = async values => {
  try {
    const axiosConfig = {
      baseURL: 'http://localhost:8000',
    };
    const response = await axios.post('/api/login', values, axiosConfig);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const submit = async values => {
  const data = {
    username: values.email,
    password: values.password,
  };
  return await handleSubmit(data);
};

const LoginForm = () => {
  const {userLogin} = useContext(UserContext);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          const result = await submit(values, actions);
          userLogin(result);
          actions.setSubmitting(false);
        }}
      >
        <FormStyles>
          <FieldWrap>
            <ErrorMessageStyle name="email" component="div" />
            <FieldStyles
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </FieldWrap>

          <FieldWrap>
            <ErrorMessageStyle name="password" component="div" />
            <FieldStyles
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </FieldWrap>

          <FlexRow centered={true}>
            <Button type="submit" onSubmit={submit}>
              Submit
            </Button>
          </FlexRow>
        </FormStyles>
      </Formik>
    </>
  );
};

LoginForm.propTypes = {
  onSelect: PropTypes.func,
};

export {LoginForm};
