import React from 'react';
import styles from './Header.module.scss';
import FilterPanel from '../filterPanel/FilterPanel';

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <h2 className={styles.header__title}>Search for books</h2>
        <FilterPanel />
      </div>
    </header>
  );
}

export default Header;
