import React from 'react';
import PropTypes from 'prop-types';
import {ModalOverlay, ModalContent} from '../../styles';

const ConfirmationModal = ({isOpen, children}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>{children}</ModalContent>
    </ModalOverlay>
  );
};

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.any,
};

export default ConfirmationModal;
