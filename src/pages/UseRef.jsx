import React, { useEffect, useLayoutEffect } from 'react'

// components
import Button from '../components/Button';
import TextField from '../components/TextField';

function UseRef() {
  // states
  const [number, setNumber] = React.useState(0);
  const multiplyRef = React.useRef(10);
  const fieldRef = React.useRef(null);
  const funcRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  const textFieldRef = React.useRef(null);

  console.log('useRef: ', multiplyRef)
  console.log('useRef function: ', typeof funcRef === 'function' && funcRef())

  useLayoutEffect(() => {
    // buttonRef.current.style.top = '100px';
    console.log('button forwardRef render: ', buttonRef)
  }, [number])
  
  return (
    <div>
      
      UseRef
      <input type="text" ref={fieldRef} />
      <button 
        type="button" 
        onClick={() =>{
          multiplyRef.current = multiplyRef.current * 2;
          funcRef.current = function() {
            console.log('ref function')
          }
          setNumber(prevState => prevState + 1);
          fieldRef.current.focus();
          textFieldRef.current.customFocus();
       
        }}
      >
        Click me
      </button>

      <h4>forwardRef</h4>
      <Button 
        text="Change background"
        ref={buttonRef}
      />

      <h4>forwardRef input</h4>
      <TextField ref={textFieldRef} />
    </div>
  )
}

export default UseRef