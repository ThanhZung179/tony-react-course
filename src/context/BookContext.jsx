import React from 'react'

export const BookContext = React.createContext();

// local state of all component that child of Book
export const BookProvider = ({ children }) => {
  const [books, setBooks] = React.useState([
    { id: 1, title: 'javascript' },
  ]);

  function handleAddBook() {
    const book = {
      id: Date.now(),
      title: 'reactjs'
    }
    setBooks([...books, book])
  }
  
  return (
    <BookContext.Provider 
      value={{
        // states
        books,
        // actions
        handleAddBook,
      }}
    >
      {children}
    </BookContext.Provider>
  )
}

export const useBookContext = () => React.useContext(BookContext);

export default BookContext