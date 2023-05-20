import React from 'react'

function HandleEvent() {
  
  // click -> trigger function -> console.log
  const handeSubmit = (todoId) => () => { 
    console.log('Submit Event', todoId)
  }

  // click -> trigger function -> function run () => {} -> console.log
  // const handeSubmit = (todoId) => { 
  //   console.log('Submit Event', todoId)
  // }

  return (
    <div>
      <button 
        type="button"
        // onClick={() => handeSubmit('1')} // pass agrument way 1
        onClick={handeSubmit(1)} // pass agrument way 2
      >
        Submit Event
      </button>
    </div>
  )
}

export default HandleEvent