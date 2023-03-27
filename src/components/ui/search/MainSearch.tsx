import React, {FormEvent, useContext, useState} from 'react';
import styles from './MainSearch.module.scss';
import {BooksContext} from "../../../pages/mainPage/MainPage";

const MainSearch = () => {
    const {setSearchQuery} = useContext(BooksContext);
    const [localSearchValue, setLocalSearchValue] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setSearchQuery(localSearchValue);
        setLocalSearchValue('');
    }

    return (
        <form className={styles.formSearch} onSubmit={handleSubmit}>
            <input
                value={localSearchValue}
                onChange={(e) => setLocalSearchValue(e.target.value)}
                className={styles.formSearch__input}
                type="text"
                placeholder="Type something..."
                name="search"
            />
            <button className={`reset-btn ${styles.searchBtn}`} type="submit">
                <i className="bi bi-search"></i>
            </button>
        </form>
    );
};

export default MainSearch;