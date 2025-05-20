import React from "react";
import styles from "./main-filter.module.css";

const MainFilter = () => {

  const filters = [
    {
      id: 1,
      title: 'Cамый дешевый',
    }, 
    {
      id: 2,
      title: 'Самый быстрый',
    },
    {
      id: 3,
      title: 'Оптимальный',
    },
  ];

  return (
    <div className={styles.container}>
      <ul className={styles['container__filters']}>
        {filters.map((filter) => <li className={styles.filter} key={filter.id}>{filter.title.toUpperCase()}</li>)}
      </ul>
    </div>
  );
};

export default MainFilter;