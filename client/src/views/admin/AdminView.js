import React, {useContext} from 'react';
import {Container} from '../../styles';
import GlobalStyle from '../../theme/globalStyles';
import {UserContext} from '../../utils/context';
import {useNavigate} from 'react-router-dom';
import {useBarbers} from '../../hooks/useBarbers';
import {Barbers} from '../admin/Barbers';

export const AdminView = () => {
  const navigate = useNavigate();
  const {user} = useContext(UserContext);
  const barbers = useBarbers(user);

  return (
    <Container>
      {barbers && <Barbers barbers={barbers} />}
      <GlobalStyle />
    </Container>
  );
};
