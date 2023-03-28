import React from 'react';
import styles from './BookCard.module.scss';
import Header from '../header/Header';
import {useAppSelector} from "../../hooks/storeHooks";
import {selectBooks} from "../../store/slices/catalogBooksSlice";
import {Link} from 'react-router-dom';

const BookCard: React.FC = () => {
    const {currentBook} = useAppSelector(selectBooks);

    return (
        <div>
            <Header/>
            <div className={styles.cardWrapper}>
                <img
                    className={styles.cardWrapper__img}
                    src={currentBook?.volumeInfo.imageLinks.thumbnail}
                    alt={currentBook?.volumeInfo.title}
                />
                <div className={styles.cardWrapper__content}>
                    <Link className={styles.cardWrapper__linkToBack} to='/'>
                        <i className="bi bi-arrow-left"></i>
                        <span>Go back</span>
                    </Link>
                    <p className={styles.cardWrapper__categories}>
                        {currentBook?.volumeInfo.categories
                            ?
                            currentBook.volumeInfo.categories.map(category => `${category} /`)
                            : ''}
                    </p>
                    <img
                        className={styles.cardWrapper__imgMobile}
                        src={currentBook?.volumeInfo.imageLinks.thumbnail}
                        alt={currentBook?.volumeInfo.title}
                    />
                    <h2 className={styles.cardWrapper__title}>{currentBook?.volumeInfo.title}</h2>
                    <span className={styles.cardWrapper__author}>
                        {currentBook?.volumeInfo.authors
                            ?
                            currentBook.volumeInfo.authors.map(author => `${author}, `)
                            : ''}
                    </span>
                    <p className={styles.cardWrapper__description}>{currentBook?.volumeInfo.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookCard;