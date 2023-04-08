import React, { FormEvent, useContext, useState } from 'react';

import { BooksContext } from '../../../pages/MainPage/bookContext';

import styles from './MainSearch.module.scss';

function MainSearch() {
  const { setSearchQuery } = useContext(BooksContext);
  const [localSearchQuery, setLocalSearchQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearchQuery);
    setLocalSearchQuery('');
  };

  return (
    <form
      className={styles.formSearch}
      onSubmit={handleSubmit}
      data-testid="form"
    >
      <label htmlFor="search">
        <input
          value={localSearchQuery}
          onChange={(e) => setLocalSearchQuery(e.target.value)}
          className={styles.formSearch__input}
          type="text"
          placeholder="Type something..."
          id="search"
        />
      </label>
      <button
        className={`reset-btn ${styles.searchBtn}`}
        type="submit"
        data-testid="search-btn"
      >
        <i className="bi bi-search" />
      </button>
    </form>
  );
}

export default MainSearch;
