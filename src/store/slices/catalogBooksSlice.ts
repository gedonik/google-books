import { RootState } from '../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CatalogBooksState } from '../../types/types';
import axios from 'axios';

const initialState: CatalogBooksState = {
    isLoading: true,
    books: [],
    error: null,
    currentBook: null
}

type PropsFetchBooks = {
    searchQuery: string | number,
    newnessValue: string,
    offsetPagination: number,
    paginationBooksQuantity: number
}

const KEY = 'AIzaSyB8PgwGepPiF1ase6klkX4pMjOnIjTdwRA';
const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = createAsyncThunk(
    'getApi/getBooks',
    async function (urlParams: PropsFetchBooks, { rejectWithValue }) {
        const { searchQuery, newnessValue, offsetPagination, paginationBooksQuantity } = urlParams;

        const params = {
            q: searchQuery,
            orderBy: newnessValue,
            key: KEY,
            startIndex: offsetPagination,
            maxResults: paginationBooksQuantity
        }

        try {
            return await axios.get(API_URL, {params}).then(res => res.data);
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
)

export const catalogBooksSlice = createSlice({
    name: 'catalogBooks',
    initialState,
    reducers: {
        findBookById: (state, action) => {
            state.currentBook = state.books.find(book => book.id === action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchBooks.fulfilled, (state, {payload}) => {
            state.isLoading = true;
            state.books = payload.items;
            state.isLoading = false;
        });
        builder.addCase(fetchBooks.rejected, (state, payload) => {
            if (payload) state.error = payload;
            state.isLoading = false;
        })
    }
})

export const { findBookById } = catalogBooksSlice.actions;

export const selectBooks = (state: RootState) => state.catalogBooks;

export default catalogBooksSlice;