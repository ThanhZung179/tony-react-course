/* eslint-disable react/prop-types */
import React from 'react';

function Button({ text = 'Click' }) {
  const[count, setCount] = React.useState(0); // local stat

  console.log('Button: ', count)

  // first render : count = 0 
  // next render: count = 0

  return (
    <>
      <button 
        type="button"
        onClick={() => {
          setCount(count + 0)
        }}
      >
        {text} {count}
      </button>
    </>
  )
}

export default Button