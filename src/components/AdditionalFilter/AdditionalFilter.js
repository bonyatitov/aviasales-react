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
          <label>
            <li className={styles.filter} key={filter.id}>
              <input
                onClick={() => handleFilterToggle(filter.name)}
                type="checkbox"
                checked={filter.checked}
              />
              <span className={styles.checkmark}></span>
              {filter.title}
            </li>
          </label>
        ))}
      </ul>
    </div>
  );
};

export default AdditionalFilter;
