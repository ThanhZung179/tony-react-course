import React from 'react'

function createInitialTodo() {
  return [
    {
      id: 1,
      title: 'learn javascript'
    },
    {
      id: 3,
      title: 'learn node'
    }
  ]
}

function StateHook() {
  const [number, setNumber] = React.useState(21)
  // const [todos, setTodos] = React.useState(createInitialTodo);
  const [todos, setTodos] = React.useState(createInitialTodo());


  console.log('todos: ', todos)
  
  function handleUpdaterFunction() {
    // setNumber(number + 1);
    // setNumber(number + 1);
    // setNumber(number + 1);

    // updater function
    setNumber(prevState => prevState + 1); // 1
    setNumber(prevState => prevState + 1); // 2
    setNumber(prevState => prevState + 1); // 3

    setTodos(prevState => {
      return [...prevState, {
        id: 2,
        title: 'learn angular'
      }]
    })
  }

  return (
    <div>
      Updater function: {number}
      <button type="button" onClick={handleUpdaterFunction}>Submit</button>
      
    </div>
  )
}

export default StateHook