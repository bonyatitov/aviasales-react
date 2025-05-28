import { store } from '../store/store';
import { setTickets, setLoading, setError, setStop } from '../store/slices/ticketsSlice';

const getKey = async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search');
  if (!response.ok) {
    throw new Error(`Ключ не получен: ${response.status}`);
  }
  const data = await response.json();
  return data.searchId;
};

export const getData = async () => {
  try {
    store.dispatch(setLoading(true));
    store.dispatch(setError(false));

    let searchId = await getKey();

    let allTickets = [];
    let stop = false;

    while (!stop) {
      const res = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
      );
      if (!res.ok) {
        // Повторяем, если 500 — это норм для API
        if (res.status === 500) continue;
        throw new Error(`Ошибка запроса: ${res.status}`);
      }

      const data = await res.json();
      allTickets = [...allTickets, ...data.tickets];
      stop = data.stop;
    }

    store.dispatch(setTickets(allTickets));
    store.dispatch(setStop(true));
  } catch (error) {
    console.error('Ошибка загрузки билетов:', error);
    store.dispatch(setError(true));
  } finally {
    store.dispatch(setLoading(false));
  }
};
