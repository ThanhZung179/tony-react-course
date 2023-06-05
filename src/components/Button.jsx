/* eslint-disable react/prop-types */
import React from 'react';

const Button = React.forwardRef(({ text = 'Click', handleClick }, ref) => {
  return (
    <>
      <button 
        type="button"
        onClick={handleClick}
        ref={ref}
      >
        {text}
      </button>
    </>
  )
})

export default Button;