import React from 'react'

// context
import { useBookContext } from '../../context/BookContext';

function BookItem() {
  const { handleAddBook } = useBookContext();

  return (
    <div>
      BookItem
    <button type="button" onClick={handleAddBook}>Add book</button>

    </div>
  )
}

export default BookItem