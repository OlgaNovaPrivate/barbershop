import React, {useState, useEffect, useContext} from 'react';
import {Container} from '../../styles';
import GlobalStyle from '../../theme/globalStyles';
import {UserContext} from '../../utils/context';
import {useNavigate} from 'react-router-dom';
import {useAppointments} from '../../hooks/useAppointments';

export const BarberView = () => {
  const navigate = useNavigate();
  const {user} = useContext(UserContext);
  const appointments = useAppointments(user);

  return (
    <Container>
      {/*barbers && <Barbers barbers={barbers} />*/}

      <GlobalStyle />
    </Container>
  );
};
