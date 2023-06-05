/* eslint-disable react/prop-types */
import React from 'react';

const TextField = React.forwardRef((_, ref) => {
  const inputRef = React.useRef(null);

  React.useImperativeHandle(ref, () => {
    return {
      customFocus() {
        console.log('custom focus');
        inputRef.current.focus();
        inputRef.current.setSelectionRange(2, 5);
        inputRef.current.style.backgroundColor = 'red';
      }
    }
  })


  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  )
})

export default TextField;