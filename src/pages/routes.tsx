import { createBrowserRouter } from 'react-router-dom';

import App from '../app/App';

import BookCardPage from './BookCardPage/BookCardPage';
import ErrorPage from './ErrorPage/ErrorPage';

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
