/* eslint-disable react/prop-types */
import React from 'react';

function Button({ text = 'Click' }) {
  const[count, setCount] = React.useState(0); // local stat

  return (
    <>
      <button 
        type="button"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        {text} {count}
      </button>
    </>
  )
}

export default Button