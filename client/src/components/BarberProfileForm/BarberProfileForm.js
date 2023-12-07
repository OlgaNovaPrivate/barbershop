import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Formik, useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Button, FormStyles, FieldWrap, FieldStyles, Header} from '../../styles';
import {UserContext} from '../../utils/context';

const BarberProfileForm = ({onCancel}) => {
  const {user} = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('firstName is required'),
      lastName: Yup.string().required('lastNamez is required'),
    }),
    onSubmit: async values => {
      try {
        await axios.post('/api/barbers', values, {
          baseURL: 'http://localhost:8000',
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        onCancel();
      } catch (error) {
        console.error(error.response.data);
      }
    },
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        surname: '',
      }}
      onSubmit={formik.handleSubmit}
    >
      <FormStyles>
        <FieldWrap>
          <FieldStyles
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}

          <FieldStyles
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
          <Header>
            <Button onClick={onCancel}>Cancel</Button>
            <Button dark={true} type="submit">
              Save Profile
            </Button>
          </Header>
        </FieldWrap>
      </FormStyles>
    </Formik>
  );
};

BarberProfileForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default BarberProfileForm;
