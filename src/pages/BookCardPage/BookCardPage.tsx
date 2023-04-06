import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BookCardPage.module.scss';
import Header from '../../components/header/Header';
import { useAppSelector } from '../../hooks/storeHooks';
import { selectBooks } from '../../store/slices/catalogBooksSlice';
import { strInArrSplitter } from '../../services/strInArrSplitter';

function BookCardPage() {
  const { currentBook } = useAppSelector(selectBooks);

  return (
    <div>
      <Header />
      <div className={styles.cardWrapper}>
        <img
          className={styles.cardWrapper__img}
          src={currentBook?.volumeInfo.imageLinks.thumbnail}
          alt={currentBook?.volumeInfo.title}
        />
        <div className={styles.cardWrapper__content}>
          <Link className={styles.cardWrapper__linkToBack} to="/">
            <i className="bi bi-arrow-left" />
            <span>Go back</span>
          </Link>
          <p className={styles.cardWrapper__categories}>
            {currentBook?.volumeInfo.categories
              ? strInArrSplitter(currentBook.volumeInfo.categories, ' /')
              : ''}
          </p>
          <img
            className={styles.cardWrapper__imgMobile}
            src={currentBook?.volumeInfo.imageLinks.thumbnail}
            alt={currentBook?.volumeInfo.title}
          />
          <h2 className={styles.cardWrapper__title}>
            {currentBook?.volumeInfo.title}
          </h2>
          <span className={styles.cardWrapper__author}>
            {currentBook?.volumeInfo.authors
              ? strInArrSplitter(currentBook.volumeInfo.authors, ',')
              : ''}
          </span>
          <p className={styles.cardWrapper__description}>
            {currentBook?.volumeInfo.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCardPage;
