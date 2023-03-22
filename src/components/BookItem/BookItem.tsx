import React from 'react';
import styles from './BookItem.module.scss';

const BookItem: React.FC = ({book}) => {
    return (
        <li className={styles.item}>
            <article >
                <a className={styles.item__link} href="#">
                    <img
                        className={styles.item__img}
                        src={book.volumeInfo.imageLinks.smallThumbnail}
                        alt={book.volumeInfo.title}
                    />
                    <span className={styles.item__category}>{book.volumeInfo.categories[0]}</span>
                    <h3 className={styles.item__title}>{book.volumeInfo.title}</h3>
                    <div className={styles.item__author}>
                        {book.volumeInfo.authors.map(author => `${author}, `)}
                    </div>
                </a>
            </article>
        </li>
    );
};

export default BookItem;