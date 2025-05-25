import { store } from '../store/store';
import { setTickets, setLoading, setError, setStop } from '../store/slices/ticketsSlice';

const getKey = async () => {
  const request = await fetch('https://aviasales-test-api.kata.academy/search');

  if (!request.ok) {
    throw new Error(`Ключ не получен, статус: ${request.status}`);
  }

  const response = await request.json();
  localStorage.setItem('searchId', response.searchId);
};

export const getData = async () => {
  try {
    store.dispatch(setLoading(true));
    store.dispatch(setError(false));

    await getKey();
    let key = null;
    if (localStorage.getItem('searchId')) {
      key = localStorage.getItem('searchId');
    }

    const request = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${key}`);
    if (!request.ok) {
      throw new Error(`Данные не получены ${request.status}`);
    }

    const response = await request.json();
    store.dispatch(setTickets(response.tickets));
    store.dispatch(setStop(response.stop));
  } catch (err) {
    console.error(err);
    store.dispatch(setError(true));
  } finally {
    store.dispatch(setLoading(false));
  }
};
