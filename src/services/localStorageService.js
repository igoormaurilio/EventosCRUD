const STORAGE_KEY = "eventos";

export const getEventos = () => {
  const eventos = localStorage.getItem(STORAGE_KEY);
  return eventos ? JSON.parse(eventos) : [];
};

export const saveEventos = (eventos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(eventos));
};

export const addEvento = (evento) => {
  const eventos = getEventos();
  eventos.push(evento);
  saveEventos(eventos);
};

export const updateEvento = (id, eventoAtualizado) => {
  const eventos = getEventos().map(evento =>
    evento.id === id ? eventoAtualizado : evento
  );
  saveEventos(eventos);
};

export const deleteEvento = (id) => {
  const eventos = getEventos().filter(evento => evento.id !== id);
  saveEventos(eventos);
};
