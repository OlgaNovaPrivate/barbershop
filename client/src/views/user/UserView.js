import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {
  SelectionTitle,
  Header,
  Title,
  Subtitle,
  Container,
  MainArea,
  Button,
} from '../../styles';
import {SERVICE_TYPES} from '../../components/ServiceSelection/ServiceTypes';
import GlobalStyle from '../../theme/globalStyles';
import {ServiceSelection} from '../../components/ServiceSelection';
import {BarberSelection} from '../../components/BarberSelection';
import {TimeSlotPicker} from '../../components/TimeslotPicker';
import {UserForm} from '../../components/UserForm';
import {Confirmation} from '../../components/Confirmation';
import {UserContext} from '../../utils/context';
import {useAppointments} from '../../hooks/useAppointments';

export const UserView = () => {
  const {user} = useContext(UserContext);
  const {appointments} = useAppointments(user);
  const [appointment, setAppointment] = useState({
    service: undefined,
    employee: undefined,
    dateTime: undefined,
    userInfo: undefined,
    confirmation: undefined,
  });

  const onSelect = (type, data) => {
    setAppointment({
      ...appointment,
      [type]: data,
    });
  };

  const getBookedSlots = appointments => {
    const slots = [];
    appointments?.forEach(a => {
      const duration = SERVICE_TYPES[a.serviceInfo];
      const dateParts = a.date.split('.');
      const timeParts = a.time.split('.');
      const formattedDateString = `${dateParts[1]}-${dateParts[0]}-${dateParts[2]}`;
      const startDate = new Date(formattedDateString);

      startDate.setHours(timeParts[0]);
      startDate.setMinutes(timeParts[1]);
      startDate.setSeconds(0);
      startDate.setMilliseconds(0);

      const endDate = new Date(startDate);
      const slot = duration / 15;

      slots.push(startDate.getTime());
      for (let i = 1; i < slot; i++) {
        endDate.setMinutes(endDate.getMinutes() + 15);
        slots.push(endDate.getTime());
      }
    });
    return slots;
  };

  const renderState = appointment => {
    const bookedSlots = getBookedSlots(appointments);
    switch (true) {
      case appointment.service === undefined:
        return <ServiceSelection onSelect={onSelect} />;
      case appointment.employee === undefined:
        return <BarberSelection onSelect={onSelect} />;
      case appointment.dateTime === undefined:
        return (
          <TimeSlotPicker
            duration={SERVICE_TYPES[appointment.service]}
            bookedSlots={bookedSlots}
            onSelectTime={time => onSelect('dateTime', {time})}
          />
        );
      case appointment.userInfo === undefined:
        return (
          <UserForm
            onSelect={onSelect}
            serviceType={appointment.service}
            barberId={appointment.employee._id}
            timestamp={appointment.dateTime.time}
          />
        );
      case appointment.confirmation === undefined:
        return (
          <Confirmation
            title={appointment.service}
            employee={appointment.employee.firstName}
            timestamp={appointment.dateTime.time}
          />
        );
      default:
        return null;
    }
  };

  const getTitle = appointment => {
    switch (true) {
      case appointment.service === undefined:
        return 'What can we do for you?';
      case appointment.employee === undefined:
        return 'Great! Who should serve you in our barber shop?';
      case appointment.dateTime === undefined:
        return 'When would you like to come?';
      case appointment.userInfo === undefined:
        return 'Please, leave your contact information';
      case appointment.confirmation === undefined:
        return 'Now, relax and let us do the rest!';
      default:
        return '';
    }
  };

  return (
    <Container>
      <Title>Make an Appointment</Title>
      <Subtitle>
        It takes one visit to make you feel like your better self
      </Subtitle>
      <Link to="/appointments">
        <Button>My Appointments</Button>
      </Link>
      <MainArea>
        <Header>
          {appointment?.userInfo === undefined && (
            <>
              <SelectionTitle>{getTitle(appointment)}</SelectionTitle>
            </>
          )}
        </Header>
        {renderState(appointment)}
      </MainArea>
      <GlobalStyle />
    </Container>
  );
};
