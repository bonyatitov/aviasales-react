import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredTickets } from '../store/selectors/ticketSelectors';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const TICKETS_STEP = 5;

const TicketList = () => {
  const { loading, error, stop, data } = useSelector((state) => state.data);
  const filteredTickets = useSelector(selectFilteredTickets);
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(TICKETS_STEP);

  // useEffect(() => {
  //   //getData();
  //   while (!stop) {
  //     dispatch(getData());
  //     console.log(data);
  //   }
  // }, []);

  useEffect(() => {
    setVisibleCount(TICKETS_STEP);
  }, [filteredTickets]);

  if (loading && filteredTickets.length === 0) {
    return <div className="loading">Загрузка билетов...</div>;
  }

  if (error) {
    return <div className="error">Произошла ошибка при загрузке билетов</div>;
  }

  if (filteredTickets.length === 0) {
    return <div className="no-tickets">Билеты не найдены</div>;
  }

  const formatTime = (date) => {
    return moment(date).format('HH:mm');
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}ч ${mins}м`;
  };

  const handleShowMore = () => {
    // if (visibleCount >= filteredTickets.length && !stop) {
    //   dispatch(getData());
    // }
    setVisibleCount((prev) => prev + TICKETS_STEP);
  };

  const canShowMore = visibleCount < filteredTickets.length || !stop;

  return (
    <div className="ticket-list">
      {filteredTickets.slice(0, visibleCount).map((ticket, index = uuidv4()) => (
        <div key={index} className="ticket">
          <div className="ticket-header">
            <div className="price">{ticket.price.toLocaleString()} ₽</div>
            <div className="carrier">
              <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt={ticket.carrier} />
            </div>
          </div>

          {ticket.segments.map((segment, idx = uuidv4()) => (
            <div key={idx} className="segment">
              <div className="route">
                <div className="route-info">
                  <div className="time">{formatTime(segment.date)}</div>
                  <div className="city">
                    {segment.origin} - {segment.destination}
                  </div>
                  <div className="date">{moment(segment.date).format('DD MMM YYYY')}</div>
                </div>
                <div className="duration">
                  <div className="duration-label">В пути</div>
                  <div className="duration-value">{formatDuration(segment.duration)}</div>
                </div>
                <div className="stops">
                  <div className="stops-label">
                    {segment.stops.length === 0
                      ? 'Без пересадок'
                      : segment.stops.length === 1
                        ? '1 пересадка'
                        : `${segment.stops.length} пересадки`}
                  </div>
                  <div className="stops-cities">{segment.stops.join(', ')}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      {canShowMore && (
        <button className="show-more-btn" onClick={handleShowMore} disabled={loading}>
          ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
        </button>
      )}
    </div>
  );
};

export default TicketList;
