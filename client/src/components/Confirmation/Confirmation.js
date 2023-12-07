import React from 'react';
import PropTypes from 'prop-types';
import {SERVICE_TYPES} from '../ServiceSelection/ServiceTypes';
import {
  Container,
  BarbershopLogoDark,
  AppointmentColumn,
  AppointmentTime,
  AppointmentDate,
  ServiceCategory,
} from '../../styles';

export const Confirmation = props => {
  const {title, timestamp, employee} = props;
  const d = new Date(timestamp);
  const date = d.toLocaleDateString('fi-FI');
  const minutes = ('0' + d.getMinutes()).slice(-2);
  const time = d.getHours() + ':' + minutes;
  const duration = SERVICE_TYPES[title];

  return (
    <Container>
      <BarbershopLogoDark />
      <AppointmentColumn centered={true}>
        <AppointmentTime>{`${time}`}</AppointmentTime>
        <ServiceCategory>{`${date}`}</ServiceCategory>
        <AppointmentDate>
          {title} {'/'} {employee}
        </AppointmentDate>
        <AppointmentDate>
          {duration}
          {' min'}
        </AppointmentDate>
      </AppointmentColumn>
    </Container>
  );
};

Confirmation.propTypes = {
  onSelect: PropTypes.func,
  title: PropTypes.string,
  employee: PropTypes.string,
  timestamp: PropTypes.number,
};
