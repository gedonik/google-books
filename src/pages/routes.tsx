import { createBrowserRouter } from 'react-router-dom';
import App from '../app/App';
import ErrorPage from './ErrorPage/ErrorPage';
import BookCardPage from './BookCardPage/BookCardPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'book/:id',
    element: <BookCardPage />,
  },
]);

export default router;
