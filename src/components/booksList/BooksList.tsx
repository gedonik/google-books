import React from 'react';

import { BookType } from '../../types/types';
import BookItem from '../bookItem/BookItem';
import MainLoader from '../ui/loader/MainLoader';

import styles from './BookList.module.scss';

interface PropsBooksList {
  books: [] | BookType[] | undefined;
  isLoading: boolean;
}

function BooksList(props: PropsBooksList) {
  const { books, isLoading } = props;

  if (isLoading) {
    return <MainLoader />;
  }

  return (
    <div className={styles.bookList}>
      {books?.length ? (
        <ul className={styles.bookList__list}>
          {books?.map((book) => (
            <BookItem book={book} key={book.id} />
          ))}
        </ul>
      ) : (
        <h2 className={styles.bookList__empty}>There are no books find =(</h2>
      )}
    </div>
  );
}

export default BooksList;
