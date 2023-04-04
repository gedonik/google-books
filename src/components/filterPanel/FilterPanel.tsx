import React, { useContext } from 'react';
import MainSearch from '../ui/search/MainSearch';
import MainSelect from '../ui/select/MainSelect';
import { categories } from './filterValues';
import { newness } from './filterValues';
import styles from './FilterPanel.module.scss';
import { BooksContext } from '../../pages/MainPage/MainPage';

const FilterPanel: React.FC = () => {
    const { categoriesValue, setCategoriesValue, newnessValue, setNewnessValue } = useContext(BooksContext);

    return (
        <div>
            <MainSearch/>

            <div className={styles.sortWrapper}>
                <label htmlFor="categories">
                    <span>Categories</span>
                    <MainSelect
                        options={categories}
                        value={categoriesValue}
                        onChange={setCategoriesValue}
                        id="categories"
                    />
                </label>
                <label htmlFor="newness">
                    <span>Sorting by</span>
                    <MainSelect
                        options={newness}
                        value={newnessValue}
                        onChange={setNewnessValue}
                        id="oldCat"
                    />
                </label>
            </div>
        </div>
    );
};

export default FilterPanel;