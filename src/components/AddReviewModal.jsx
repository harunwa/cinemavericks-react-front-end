import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import AddNewReviewForm from './AddNewReviewForm';

const AddReviewModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddNewReviewForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddReviewModal;