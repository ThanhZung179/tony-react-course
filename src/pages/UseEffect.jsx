import React from 'react';

// components
import Button from '../components/Button';

function UseEffect() {
  // state
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    console.log('useEffect')
    fetch(`https://jsonplaceholder.typicode.com/users?_start=${page}&_limit=5`)
      .then(response => response.json())
      .then(json => setUsers(json))


    return () => {
      console.log('clean up useEffect')
    }
  }, [page])


  // UI
  return (
    <div>
      {users.map(user => (
        <div>
          Email: {user.email}
        </div>
      ))}

      <Button  
        text="Prev Page"
        handleClick={() => setPage(prevState => prevState - 1)}
      />
      {page}
      <Button  
        text="Next Page"
        handleClick={() => setPage(prevState => prevState + 1)}
      />
    </div>
  )
}

export default UseEffect