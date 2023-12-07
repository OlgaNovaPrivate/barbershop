import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {
  Upcoming,
  AppointmentTitle,
  Container,
  AppointmentArea,
  ServiceCategory,
} from '../../styles';
import {
  BarberListItemImageWrapper,
  BarberListItemImage,
} from '../../components/BarberSelection/BarberSelection';
import styled from 'styled-components';
import GlobalStyle from '../../theme/globalStyles';
import CreateNewBarber from './CreateNewBarber';
import {useBarbers} from '../../hooks/useBarbers';
import {UserContext} from '../../utils/context';
import RemoveBarber from './RemoveBarber';

const ImageWrapper = styled(BarberListItemImageWrapper)`
  margin: 0;
`;

export const Barbers = () => {
  const {user} = useContext(UserContext);
  const {barbers, fetchBarbers} = useBarbers(user);

  const handleCancel = () => {
    fetchBarbers();
  };

  return (
    <Container>
      <Upcoming>
        <AppointmentTitle>Barbers</AppointmentTitle>
        <CreateNewBarber onUpdate={fetchBarbers} />
        {barbers?.map(barber => {
          return (
            <div key={barber._id}>
              <AppointmentArea>
                <ServiceCategory>
                  {barber.firstName} {barber.lastName}
                </ServiceCategory>
                <ImageWrapper>
                  <BarberListItemImage className={`${barber.firstName}`} />
                </ImageWrapper>
                <RemoveBarber barberId={barber._id} onCancel={handleCancel} />
              </AppointmentArea>
            </div>
          );
        })}
      </Upcoming>
      <GlobalStyle />
    </Container>
  );
};

Barbers.propTypes = {
  onSelect: PropTypes.func,
  barbers: PropTypes.any,
};
