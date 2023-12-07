import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {UserContext} from '../../utils/context';
import {
  Header,
  Button,
  ModalMessage,
  DeleteIcon,
  IconWrapper,
} from '../../styles';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';

const RemoveBarber = ({barberId, onCancel, onUpdate}) => {
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const {user} = useContext(UserContext);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/barbers/${barberId}`, {
        baseURL: 'http://localhost:8000',
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setConfirmationModalOpen(false);
      onCancel();
    } catch (error) {
      console.error('Error removing barber:', error);
    }
  };

  const handleCloseModal = () => {
    setConfirmationModalOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setConfirmationModalOpen(true)}>
        Remove Barber
      </Button>
      <ConfirmationModal isOpen={isConfirmationModalOpen}>
        <IconWrapper>
          <DeleteIcon />
        </IconWrapper>

        <ModalMessage>
          Are you sure you want to remove this barber?
        </ModalMessage>
        <Header>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button dark={true} onClick={handleDelete}>
            Yes
          </Button>
        </Header>
      </ConfirmationModal>
    </div>
  );
};

RemoveBarber.propTypes = {
  barberId: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
export default RemoveBarber;
