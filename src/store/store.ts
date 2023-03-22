import { configureStore } from '@reduxjs/toolkit';
import catalogBooksSlice from './slices/catalogBooksSlice';

const store = configureStore({
    reducer: {
        catalogBooks: catalogBooksSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
