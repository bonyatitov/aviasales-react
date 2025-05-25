import React from 'react';
import styles from './additional-filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFilter } from '../../store/slices/filteresSlice';

const AdditionalFilter = () => {
  const filters = useSelector((state) =>
    state.filters.filter((filter) => filter.type === 'additionalFilter'),
  );
  const dispatch = useDispatch();

  const handleFilterToggle = (filterName) => {
    dispatch(toggleFilter(filterName));
  };

  return (
    <div className={styles.container}>
      <span className={styles.heading}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <ul>
        {filters.map((filter) => (
          <li className={styles.filter} key={filter.id}>
            <label>
              <input
                type="checkbox"
                checked={filter.checked}
                onChange={() => handleFilterToggle(filter.name)}
              />
              <span className={styles.checkmark}></span>
              {filter.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdditionalFilter;
