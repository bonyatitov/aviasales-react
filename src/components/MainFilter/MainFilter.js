import React from 'react';
import styles from './main-filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMainFilter } from '../../store/slices/mainFiltersSlice';

const MainFilter = () => {
  const filters = useSelector((state) => state.mainFilters);
  const dispatch = useDispatch();

  const handleClick = (name) => {
    dispatch(toggleMainFilter(name));
  };

  return (
    <div className={styles.container}>
      <ul className={styles['container__filters']}>
        {filters.map((filter) => (
          <li
            className={`${styles.filter} ${filter.checked ? styles.active : ''}`}
            key={filter.id}
            onClick={() => handleClick(filter.name)}
          >
            {filter.title.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainFilter;
