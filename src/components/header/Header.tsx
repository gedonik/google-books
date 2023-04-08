import React from 'react';

import FilterPanel from '../filterPanel/FilterPanel';

import styles from './Header.module.scss';

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
