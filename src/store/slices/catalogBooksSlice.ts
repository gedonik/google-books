import { RootState } from '../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CatalogBooksState } from '../../types/types';
import axios from 'axios';

const initialState: CatalogBooksState = {
    isLoading: false,
    books: [],
    error: null
}
const KEY = 'AIzaSyB8PgwGepPiF1ase6klkX4pMjOnIjTdwRA';
const API_URL = `https://www.googleapis.com/books/v1/volumes?q=react&key=${KEY}`;

export const getBooks = createAsyncThunk(
    'getApi/getBooks',
    async function (_, {rejectWithValue}) {
        try {
            return await axios.get(API_URL).then(res => res.data);
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
)

export const catalogBooksSlice = createSlice({
    name: 'catalogBooks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBooks.pending, (state) => {
            state.isLoading = true;
            state.error = null
        });
        builder.addCase(getBooks.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.books = payload;
        });
        builder.addCase(getBooks.rejected, (state, payload) => {
            if (payload) state.error = payload;
            state.isLoading = false;
        })
    }
})

export const selectBooks = (state: RootState) => state.catalogBooks;

export default catalogBooksSlice;