import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {UserContext} from '../../utils/context';
import {
  Button,
  ModalMessage,
  Header,
  IconWrapper,
  DeleteIcon,
} from '../../styles';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';

const CancelAppointment = ({appointmentId, onCancel}) => {
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const {user} = useContext(UserContext);

  const handleCancel = async () => {
    try {
      await axios.delete(`/api/appointments/${appointmentId}`, {
        baseURL: 'http://localhost:8000',
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      onCancel();
      setConfirmationModalOpen(false);
    } catch (error) {
      console.error('Error cancelling appointment:', error);
    }
  };

  const handleCloseModal = () => {
    setConfirmationModalOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setConfirmationModalOpen(true)}>
        Cancel Appointment
      </Button>
      <ConfirmationModal isOpen={isConfirmationModalOpen}>
        <IconWrapper>
          <DeleteIcon />
        </IconWrapper>
        <ModalMessage>
          Are you sure you want to cancel this appointment?
        </ModalMessage>
        <Header>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button dark={true} onClick={handleCancel}>
            Yes
          </Button>
        </Header>
      </ConfirmationModal>
    </div>
  );
};

CancelAppointment.propTypes = {
  appointmentId: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
};
export default CancelAppointment;
