import React from 'react';
import './Header.module.scss';
import FilterPanel from '../filterPanel/FilterPanel';

const Header: React.FC = () => {
    return (
        <header>
            <div className="container">
                <h2 className={`title`}>Search for books</h2>
                <FilterPanel />
            </div>
        </header>
    );
};

export default Header;