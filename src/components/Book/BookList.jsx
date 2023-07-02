import React from 'react';

// context
import { useBookContext } from '../../context/BookContext';

function BookList() {
  const { books } = useBookContext();

  console.log('book list: ', books)
  return (
    <div>
      {books.map(book => {
        return (
          <div>
            id: {book.id} - title: {book.title}
          </div>
        )
      })}
    </div>
  )
}

export default BookList