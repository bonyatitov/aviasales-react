import React from "react";
import styles from "./additional-filter.module.css";
import { useSelector, useDispatch } from "react-redux";


const AdditionalFilter = () => {
  const allfilters = useSelector((state) => state.filteres);
  const filters = allfilters.filter(filter => filter.type === 'additionalFilter' )
  console.log(allfilters);

  const dispatch = useDispatch();

  const handleFilterToggle = (filterName) => {
    dispatch({
      type: 'TOGGLE_FILTER',
      payload: { name: filterName }
    });
  };

  return (
    <div className={styles.container}>
      <span className={styles.heading}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <ul>
        {filters.map(filter => (
          <li className={styles.filter} key={filter.id}>
            <label>
              <input 
              onChange={() => {
                handleFilterToggle(filter.name);
                console.log(`Имя фильтра ${filter.name}, \n checked: ${filter.checked}`)
              }} 
              type="checkbox"
              checked={filter.checked}
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
