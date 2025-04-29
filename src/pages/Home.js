import React, { useState, useEffect } from 'react';
import { getEventos, addEvento, updateEvento, deleteEvento } from '../services/localStorageService';
import EventForm from '../components/EventForm';
import EventTable from '../components/EventTable';
import ConfirmModal from '../components/ConfirmModal';
import { Container } from 'react-bootstrap';

const Home = () => {
  const [eventos, setEventos] = useState([]);
  const [eventoEditando, setEventoEditando] = useState(null);
  const [eventoParaExcluir, setEventoParaExcluir] = useState(null);

  useEffect(() => {
    setEventos(getEventos());
  }, []);

  const handleAddOrUpdate = (evento) => {
    if (evento.id) {
      updateEvento(evento.id, evento);
    } else {
      evento.id = crypto.randomUUID();
      addEvento(evento);
    }
    setEventos(getEventos());
    setEventoEditando(null);
  };

  const handleEdit = (evento) => {
    setEventoEditando(evento);
  };

  const handleDelete = (id) => {
    deleteEvento(id);
    setEventos(getEventos());
    setEventoParaExcluir(null);
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Gerenciador de Eventos</h1>
      <EventForm onSave={handleAddOrUpdate} evento={eventoEditando} />
      <EventTable eventos={eventos} onEdit={handleEdit} onDelete={setEventoParaExcluir} />
      <ConfirmModal
        show={!!eventoParaExcluir}
        onConfirm={() => handleDelete(eventoParaExcluir)}
        onCancel={() => setEventoParaExcluir(null)}
        message="Deseja realmente excluir este evento?"
      />
    </Container>
  );
};

export default Home;
