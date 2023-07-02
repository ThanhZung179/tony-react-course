/* eslint-disable react/prop-types */
import React from 'react';

const Button = React.forwardRef(({ text = 'Click', type = 'button', handleClick }, ref) => {
  return (
    <>
      <button 
        type={type}
        onClick={handleClick}
        ref={ref}
      >
        {text}
      </button>
    </>
  )
})

export default Button;