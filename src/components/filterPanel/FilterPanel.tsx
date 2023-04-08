import React, { useContext } from 'react';

import { BooksContext } from '../../pages/MainPage/bookContext';
import MainSearch from '../ui/search/MainSearch';
import MainSelect from '../ui/select/MainSelect';

import styles from './FilterPanel.module.scss';
import { categories, newness } from './filterValues';

function FilterPanel() {
  const { categoriesValue, setCategoriesValue, newnessValue, setNewnessValue } =
    useContext(BooksContext);

  return (
    <div>
      <MainSearch />
      <div className={styles.sortWrapper}>
        <div className={styles.categories}>
          <span>Categories</span>
          <MainSelect
            options={categories}
            value={categoriesValue}
            onChange={setCategoriesValue}
            id="categories"
          />
        </div>
        <div className={styles.newness}>
          <span>Sorting by</span>
          <MainSelect
            options={newness}
            value={newnessValue}
            onChange={setNewnessValue}
            id="newness"
          />
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
