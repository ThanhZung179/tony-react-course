import React from 'react';

// components
import BookList from '../components/Book/BookList';
import BookItem from '../components/Book/BookItem';

// context
import { BookProvider } from '../context/BookContext';

function Books() {
  return (
    <BookProvider>
      <BookList />
      <BookItem />
    </BookProvider>
  )
}

export default Books