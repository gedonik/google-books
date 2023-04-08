import React, { useEffect, useState } from 'react';

import BooksList from '../../components/booksList/BooksList';
import Header from '../../components/header/Header';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { fetchBooks, selectBooks } from '../../store/slices/catalogBooksSlice';
import { BookType } from '../../types/types';
import ErrorPage from '../ErrorPage/ErrorPage';

import styles from './MainPage.module.scss';
import { BooksContext } from './bookContext';

function MainPage() {
  const [searchQuery, setSearchQuery] = useState('react');
  const [categoriesValue, setCategoriesValue] = useState('All');
  const [newnessValue, setNewnessValue] = useState('Relevance');

  const dispatch = useAppDispatch();
  const { isLoading, books, error } = useAppSelector(selectBooks);
  const [paginationBooksQuantity, setPaginationBooksQuantity] =
    useState<number>(10);
  const [offsetPagination, setOffsetPagination] = useState<number>(0);
  const [filteredBooks, setFilteredBooks] = useState<[] | BookType[]>([]);

  useEffect(() => {
    dispatch(
      fetchBooks({
        searchQuery,
        newnessValue,
        offsetPagination,
        paginationBooksQuantity,
      })
    );
  }, [
    searchQuery,
    newnessValue,
    paginationBooksQuantity,
    dispatch,
    offsetPagination,
  ]);

  const filteredBooksByCategory = (arr: BookType[], sortParam: string) =>
    arr.filter((item) =>
      item.volumeInfo.categories?.find((category) => {
        if (sortParam !== 'All') {
          return category.toLowerCase() === sortParam.toLowerCase();
        }
        return category;
      })
    );

  useEffect(() => {
    setFilteredBooks(filteredBooksByCategory(books, categoriesValue));
  }, [books, categoriesValue]);

  const addMoreBooks = () => {
    if (offsetPagination <= 10 && paginationBooksQuantity <= 10) {
      setOffsetPagination((prevState: number) => prevState + 30);
      setPaginationBooksQuantity((prevState: number) => prevState + 30);
    }
  };

  if (error) {
    return <ErrorPage />;
  }

  return (
    <BooksContext.Provider
      value={{
        setSearchQuery,
        categoriesValue,
        setCategoriesValue,
        newnessValue,
        setNewnessValue,
      }}
    >
      <Header />
      <div className={`container ${styles.mainPage}`}>
        <h2 className={styles.mainPage__title}>
          {`Found ${filteredBooks.length} results`}
        </h2>
        <BooksList books={filteredBooks} isLoading={isLoading} />
        {filteredBooks.length ? (
          <button
            className={`reset-btn ${styles.mainPage__btn}`}
            onClick={addMoreBooks}
            disabled={offsetPagination > 40 || paginationBooksQuantity > 40}
            type="button"
          >
            Load more
          </button>
        ) : null}
      </div>
    </BooksContext.Provider>
  );
}

export default MainPage;
