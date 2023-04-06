import React, { FormEvent, useContext, useState } from 'react';
import styles from './MainSearch.module.scss';
import { BooksContext } from '../../../pages/MainPage/MainPage';

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
      <input
        value={localSearchQuery}
        onChange={(e) => setLocalSearchQuery(e.target.value)}
        className={styles.formSearch__input}
        type="text"
        placeholder="Type something..."
        name="search"
        data-testid="input-search"
      />
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
