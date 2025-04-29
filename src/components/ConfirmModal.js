import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({ show, onConfirm, onCancel, message }) => {
  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar Exclusão</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
