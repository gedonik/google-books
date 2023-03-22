import React, {useState} from 'react';
import MainSearch from '../ui/search/MainSearch';
import MainSelect from '../ui/select/MainSelect';
import {categories} from './filterValues';
import {oldCat} from './filterValues';

const FilterPanel: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [categoriesValue, setCategoriesValue] = useState('all');
    const [oldCatValue, setOldCatValue] = useState('relevance');

    return (
        <div className='filter-container'>
            <MainSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

            <div className="sort">
                <label htmlFor="categories">
                    Categories
                    <MainSelect
                        options={categories}
                        value={categoriesValue}
                        onChange={setCategoriesValue}
                        id="categories"
                    />
                </label>
                <label htmlFor="oldCat">
                    Sorting by
                    <MainSelect
                        options={oldCat}
                        value={oldCatValue}
                        onChange={setOldCatValue}
                        id="oldCat"
                    />
                </label>
            </div>
        </div>
    );
};

export default FilterPanel;