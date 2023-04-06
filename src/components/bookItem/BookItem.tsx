import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BookItem.module.scss';
import { BookType } from '../../types/types';
import { useAppDispatch } from '../../hooks/storeHooks';
import { findBookById } from '../../store/slices/catalogBooksSlice';
import { strInArrSplitter } from '../../services/strInArrSplitter';

type PropsBookItem = {
  book: BookType;
};

function BookItem(props: PropsBookItem) {
  const { book } = props;
  const dispatch = useAppDispatch();

  return (
    <li className={styles.item}>
      <article className={styles.item__wrapper}>
        <Link
          className={styles.item__link}
          onClick={() => dispatch(findBookById(book.id))}
          to={`book/${book.id}`}
        >
          <img
            className={styles.item__img}
            src={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : undefined
            }
            alt={book.volumeInfo.title}
          />
          <span className={styles.item__category}>
            {book.volumeInfo.categories ? book.volumeInfo.categories[0] : ''}
          </span>
          <h3 className={styles.item__title}>{book.volumeInfo.title}</h3>
          <div className={styles.item__author}>
            {book.volumeInfo.authors
              ? strInArrSplitter(book.volumeInfo.authors, ',')
              : ''}
          </div>
        </Link>
      </article>
    </li>
  );
};

export default BookItem;
