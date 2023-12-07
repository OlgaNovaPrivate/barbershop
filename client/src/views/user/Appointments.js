import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {UserContext} from '../../utils/context';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {
  Upcoming,
  Previous,
  AppointmentTitle,
  Container,
  AppointmentArea,
  AppointmentColumn,
  ServiceCategory,
  ServiceProvider,
  AppointmentDate,
  Button,
} from '../../styles';
import GlobalStyle from '../../theme/globalStyles';
import {useAppointments} from '../../hooks/useAppointments';
import {parseDate} from '../../utils/time';
import CancelAppointment from './CancelAppointment';

export const Appointments = () => {
  const navigate = useNavigate();
  const {user} = useContext(UserContext);
  const {appointments, fetchAppointments} = useAppointments(user);

  const handleCancel = () => {
    console.log('Appointment cancelled!');
    fetchAppointments();
  };

  return (
    <Container>
      <Upcoming>
        <AppointmentTitle>Upcoming appointments</AppointmentTitle>
        <Link to="/">
          <Button>Back</Button>
        </Link>

        {appointments?.map(appointment => {
          const dateToShow = parseDate(appointment.date, appointment.time);
          return !dateToShow.isPast ? (
            <AppointmentArea key={appointment._id}>
              <AppointmentColumn>
                <ServiceCategory>{appointment.serviceInfo}</ServiceCategory>
                <AppointmentDate>{`${dateToShow.date} / ${dateToShow.time}`}</AppointmentDate>
              </AppointmentColumn>

              <AppointmentColumn>
                <ServiceProvider>
                  {appointment.barber.firstName}
                </ServiceProvider>
              </AppointmentColumn>

              <CancelAppointment
                appointmentId={appointment._id}
                onCancel={handleCancel}
              />
            </AppointmentArea>
          ) : (
            <div />
          );
        })}
      </Upcoming>
      <Previous>
        <AppointmentTitle>Previous appointments</AppointmentTitle>
        {appointments?.map(appointment => {
          const dateToShow = parseDate(appointment.date, appointment.time);
          return dateToShow.isPast ? (
            <AppointmentArea key={appointment._id}>
              <AppointmentColumn>
                <ServiceCategory>{appointment.serviceInfo}</ServiceCategory>
                <AppointmentDate>{`${dateToShow.date} / ${dateToShow.time}`}</AppointmentDate>
              </AppointmentColumn>

              <AppointmentColumn>
                <ServiceProvider>
                  {appointment.barber.firstName}
                </ServiceProvider>
              </AppointmentColumn>
            </AppointmentArea>
          ) : (
            <div />
          );
        })}
      </Previous>
      <GlobalStyle />
    </Container>
  );
};

Appointments.propTypes = {
  onSelect: PropTypes.func,
  appointments: PropTypes.any,
};
