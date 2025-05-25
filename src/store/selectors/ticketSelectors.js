import { createSelector } from '@reduxjs/toolkit';

// Селектор для получения всех билетов
const selectAllTickets = (state) => state.data.tickets;

// Селектор для получения активных фильтров пересадок
const selectActiveTransferFilters = (state) => {
  const filters = state.filters;
  const allChecked = filters.find((f) => f.name === 'all')?.checked;

  if (allChecked) return null; // Если выбран "Все", возвращаем null (показываем все билеты)

  return filters
    .filter((f) => f.checked && f.name !== 'all')
    .map((f) => {
      switch (f.name) {
        case 'withoutTransfer':
          return 0;
        case 'oneTransfer':
          return 1;
        case 'twoTransfer':
          return 2;
        case 'threeTransfer':
          return 3;
        default:
          return null;
      }
    });
};

// Селектор для получения активного основного фильтра
const selectActiveMainFilter = (state) => {
  const activeFilter = state.mainFilters.find((f) => f.checked);
  return activeFilter ? activeFilter.name : null;
};

// Селектор для фильтрации билетов по пересадкам
export const selectFilteredTickets = createSelector(
  [selectAllTickets, selectActiveTransferFilters, selectActiveMainFilter],
  (tickets, activeTransferFilters, activeMainFilter) => {
    if (!tickets) return [];

    // Фильтрация по пересадкам
    let filteredTickets = tickets;
    if (activeTransferFilters) {
      filteredTickets = tickets.filter((ticket) =>
        ticket.segments.every((segment) => activeTransferFilters.includes(segment.stops.length)),
      );
    }

    // Сортировка
    if (activeMainFilter) {
      filteredTickets = [...filteredTickets].sort((a, b) => {
        switch (activeMainFilter) {
          case 'lowPrice':
            return a.price - b.price;
          case 'fast':
            const durationA = a.segments.reduce((sum, segment) => sum + segment.duration, 0);
            const durationB = b.segments.reduce((sum, segment) => sum + segment.duration, 0);
            return durationA - durationB;
          case 'optimal':
            // Оптимальный вариант учитывает и цену, и время
            const optimalScoreA =
              a.price + a.segments.reduce((sum, segment) => sum + segment.duration, 0) * 100;
            const optimalScoreB =
              b.price + b.segments.reduce((sum, segment) => sum + segment.duration, 0) * 100;
            return optimalScoreA - optimalScoreB;
          default:
            return 0;
        }
      });
    }

    return filteredTickets;
  },
);
