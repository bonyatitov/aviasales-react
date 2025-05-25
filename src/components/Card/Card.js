import React from 'react';
import styles from './card.module.css';

const Card = ({ price, carrier, segments }) => {
  return (
    <div className={styles.card}>
      <div className={styles['container-top']}>
        <span className={styles.price}>{price} ₽</span>
        <img src="#" alt="company logo" />
      </div>

      <table className={styles.table}>
        <tbody>
          {/* Первый рейс */}
          <tr className={styles.row}>
            <td className={styles.cell}>
              <span className={styles['data-type']}>MOW - HKT</span>
              <span className={styles.data}>10:45 – 08:00</span>
            </td>
            <td className={styles.cell}>
              <span className={styles['data-type']}>В ПУТИ</span>
              <span className={styles.data}>21ч 15м</span>
            </td>
            <td className={styles.cell}>
              <span className={styles['data-type']}>ПЕРЕСАДКИ</span>
              <span className={styles.data}>HKG, JNB</span>
            </td>
          </tr>

          {/* Второй рейс */}
          <tr className={styles.row}>
            <td className={styles.cell}>
              <span className={styles['data-type']}>MOW - HKT</span>
              <span className={styles.data}>10:45 – 08:00</span>
            </td>
            <td className={styles.cell}>
              <span className={styles['data-type']}>В ПУТИ</span>
              <span className={styles.data}>21ч 15м</span>
            </td>
            <td className={styles.cell}>
              <span className={styles['data-type']}>ПЕРЕСАДКИ</span>
              <span className={styles.data}>HKG, JNB</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Card;
