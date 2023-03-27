import React from 'react';
import BookItem from '../bookItem/BookItem';
import styles from './BookList.module.scss';
import {BookType} from "../../types/types";
import MainLoader from "../ui/loader/MainLoader";

interface PropsBooksList {
    books: [] | BookType[] | undefined,
    isLoading: boolean
}

const BooksList: React.FC<PropsBooksList> = (props: PropsBooksList) => {
    const {books, isLoading} = props;

    return (
        <div className={styles.bookList}>
            {isLoading
                ? <MainLoader/>
                :
                books?.length
                    ?
                    <ul className={styles.bookList__list}>
                        {books.map(book =>
                            <BookItem book={book} key={book.id}/>
                        )}
                    </ul>
                    : <h2 className={styles.bookList__empty}>There are no books find =(</h2>
            }
        </div>
    );
};

export default BooksList;