import React, {useContext, useEffect} from 'react';
import {
  SelectionTitle,
  Container,
  BarbershopLogoDark,
  LoginArea,
} from '../styles';
import {LoginForm} from '../components/LoginForm';
import GlobalStyle from '../theme/globalStyles';
import {UserContext} from '../utils/context';
import {useNavigate} from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const {user} = useContext(UserContext);

  useEffect(() => {
    if (user.auth) navigate('/');
  }, [user, navigate]);

  return (
    <Container>
      <BarbershopLogoDark />
      <LoginArea minimized={true}>
        <SelectionTitle>Log in to manage your appointments</SelectionTitle>
        <LoginForm />
      </LoginArea>
      <GlobalStyle />
    </Container>
  );
};
