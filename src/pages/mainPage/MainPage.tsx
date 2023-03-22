import React from 'react';
import Header from '../../components/header/Header';
import BooksList from "../../components/booksList/BooksList";

const MainPage: React.FC = () => {
    return (
        <div>
            <Header />
            <BooksList />
        </div>
    );
};

export default MainPage;