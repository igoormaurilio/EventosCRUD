import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const EventForm = ({ onSave, evento }) => {
  const [formData, setFormData] = useState({
    nome: '',
    data: '',
    local: '',
    descricao: ''
  });

  useEffect(() => {
    if (evento) {
      setFormData(evento);
    } else {
      setFormData({ nome: '', data: '', local: '', descricao: '' });
    }
  }, [evento]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ nome: '', data: '', local: '', descricao: '' });
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nome do Evento</Form.Label>
            <Form.Control
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Data</Form.Label>
            <Form.Control
              type="date"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Local</Form.Label>
            <Form.Control
              type="text"
              name="local"
              value={formData.local}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            {evento ? "Atualizar Evento" : "Adicionar Evento"}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EventForm;
