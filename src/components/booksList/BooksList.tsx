import React, {useEffect} from 'react';
import {getBooks, selectBooks} from '../../store/slices/catalogBooksSlice';
import {useAppDispatch, useAppSelector} from '../../hooks/rtkHooks';
import BookItem from '../BookItem/BookItem';
import styles from './BookList.module.scss';

const BooksList: React.FC = () => {
    const dispatch = useAppDispatch();
    const {isLoading, books, error} = useAppSelector(selectBooks);

    useEffect(() => {
        dispatch(getBooks())
    }, []);
    // console.log(books)
    return (
        <div className="container">
            <h2 className={styles.title}>Found {books?.totalItems} results</h2>
            <ul className={styles.list}>
                {books?.items?.map(book =>
                    <BookItem book={book} key={book.id} />
                )}
            </ul>
        </div>
    );
};

export default BooksList;