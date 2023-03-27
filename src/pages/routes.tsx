import { createBrowserRouter } from 'react-router-dom';
import App from '../app/App';
import ErrorPage from './ErrorPage/ErrorPage';
import BookCard from "../components/bookCard/BookCard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "book/:id",
        element: <BookCard />,
    },
]);