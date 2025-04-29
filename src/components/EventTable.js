import React from 'react';
import { Table, Button } from 'react-bootstrap';

const EventTable = ({ eventos, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data</th>
          <th>Local</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {eventos.length > 0 ? (
          eventos.map(evento => (
            <tr key={evento.id}>
              <td>{evento.nome}</td>
              <td>{evento.data}</td>
              <td>{evento.local}</td>
              <td>{evento.descricao}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => onEdit(evento)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete(evento.id)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              Nenhum evento cadastrado.
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default EventTable;
