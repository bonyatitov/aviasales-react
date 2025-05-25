import React from 'react';
import styles from './header.module.css';
import logo from './images/avia-sales-logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
