import { createContext } from 'react';

interface BooksContextType {
  setSearchQuery: (value: string) => string;
  categoriesValue: string;
  setCategoriesValue: (value: string) => string;
  newnessValue: string;
  setNewnessValue: (value: string) => string;
}

const booksContextDefaultValue: BooksContextType = {
  setSearchQuery: () => 'react',
  categoriesValue: 'All',
  setCategoriesValue: () => 'All',
  newnessValue: 'Relevance',
  setNewnessValue: () => 'Relevance',
};

export const BooksContext = createContext<BooksContextType>(
  booksContextDefaultValue
);
