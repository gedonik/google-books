import React from 'react';
import './mainSearch.css';
import MainButton from '../button/MainButton';

type PropsMainSearchType = {
    searchValue: any,
    setSearchValue: Function
}

const MainSearch = ({searchValue, setSearchValue}: PropsMainSearchType) => {
    return (
        <form className="form-search" onSubmit={(e) => e.preventDefault()}>
            <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="form-search__input"
                type="text"
                placeholder="Type something..."
            />
            <MainButton className="btn form-search__btn" type="submit">
                <i className="bi bi-search"></i>
            </MainButton>
        </form>
    );
};

export default MainSearch;