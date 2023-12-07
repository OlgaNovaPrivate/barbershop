import React, {useState} from 'react';
import {CreateNewBarberContainer, ServiceCategory, Button} from '../../styles';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';
import BarberProfileForm from '../../components/BarberProfileForm/BarberProfileForm';
import PropTypes from 'prop-types';

const CreateNewBarber = ({onUpdate}) => {
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const handleCloseModal = () => {
    setConfirmationModalOpen(false);
    onUpdate();
  };

  return (
    <CreateNewBarberContainer>
      <Button onClick={() => setConfirmationModalOpen(true)}>Add New</Button>
      <ConfirmationModal isOpen={isConfirmationModalOpen}>
        <ServiceCategory new barber>
          Add new barber
        </ServiceCategory>
        <BarberProfileForm onCancel={handleCloseModal} onUpdate={onUpdate} />
      </ConfirmationModal>
    </CreateNewBarberContainer>
  );
};

CreateNewBarber.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

export default CreateNewBarber;
