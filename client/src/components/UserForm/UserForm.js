import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {Formik} from 'formik';
import {
  Button,
  FlexRow,
  FormStyles,
  FieldStyles,
  ErrorMessageStyle,
  FieldWrap,
  Header,
} from '../../styles';
import axios from 'axios';
import styled from 'styled-components';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import * as Yup from 'yup';
import {UserContext} from '../../utils/context';
import {createDateAndTime} from '../../utils/time';

const PhoneInputStyle = styled(PhoneInput)`
  margin-bottom: 2rem;
  input {
    font-family: 'Lexend Deca', sans-serif;
    background-color: ${props => props.theme.background.default};
    border: 2px solid ${props => props.theme.border.default};
    border-radius: 3px;
    padding: 0.8rem;
  }
`;

const handleSubmit = async props => {
  const {user, data} = props;
  try {
    const axiosConfig = {
      baseURL: 'http://localhost:8000',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios.post('/api/appointments', data, axiosConfig);
  } catch (error) {
    console.error(error); // Handle any error that occurs
  }
};

export const UserForm = props => {
  const {onSelect, barberId, serviceType, timestamp} = props;
  const [value, setValue] = useState();
  const {user} = useContext(UserContext);
  const submit = (values, {setSubmitting}) => {
    const [date, time] = createDateAndTime(timestamp);
    const data = {
      userId: user.id,
      userInfo: {...values},
      serviceInfo: serviceType,
      barber: barberId,
      date: date,
      time: time,
    };
    handleSubmit({user, data});
    onSelect('userInfo', data);
    setSubmitting(false);
  };

  const handleCancel = resetForm => {
    // Reset the form fields to their initial values
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    surname: Yup.string().required('Last name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
    phone: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
      .required('Phone number is required'),
  });

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          phone: '',
          message: '',
        }}
        // validationSchema={validationSchema}
        onSubmit={submit}
      >
        {({resetForm}) => (
          <FormStyles>
            <FlexRow>
              <FieldWrap>
                <ErrorMessageStyle name="name" component="div" />
                <FieldStyles name="name" type="text" placeholder="Name *" />
              </FieldWrap>
              <FieldWrap>
                <ErrorMessageStyle name="surname" component="div" />
                <FieldStyles
                  name="surname"
                  type="text"
                  placeholder="Surname *"
                />
              </FieldWrap>
            </FlexRow>
            <FieldWrap>
              <ErrorMessageStyle name="email" component="div" />
              <FieldStyles name="email" type="email" placeholder="Email *" />
            </FieldWrap>
            <FieldWrap>
              <ErrorMessageStyle name="phone" component="div" />
              <PhoneInputStyle
                name="phone"
                type="tel"
                placeholder="Phone Number *"
                value={value}
                onChange={setValue}
              />
            </FieldWrap>
            <FieldWrap>
              <ErrorMessageStyle name="message" component="div" />
              <FieldStyles
                name="message"
                type="text"
                placeholder="Message (optional)"
              />
            </FieldWrap>

            <Header>
              <Button type="button" onClick={() => handleCancel(resetForm)}>
                Cancel
              </Button>
              <Button dark={true} type="submit" onSubmit={submit}>
                Confirm
              </Button>
            </Header>
          </FormStyles>
        )}
      </Formik>
    </>
  );
};

UserForm.propTypes = {
  onSelect: PropTypes.func,
  serviceType: PropTypes.string,
  barberId: PropTypes.string,
  timestamp: PropTypes.string,
};
