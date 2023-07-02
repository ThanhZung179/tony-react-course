/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function State() {
  const [messageObj, setMessageObj] = useState({
    message: '',
    country: {
      id: 1,
      text: ''
    }
  }); // local state component // memory A
  console.log('State Component', messageObj)

  return (
    <div>
      Message:
      <input 
        type='text'
        value={messageObj.message}
        onChange={(e) => {
          const value = e.target.value;
          // messageObj.message = value; // don't work -> memory A
          // setMessageObj(messageObj);

          // const newMessageObject = { ...messageObj }; // clone object -> work -> memory B
          // newMessageObject.message = value;
          // setMessageObj(newMessageObject);

          // updater function
          setMessageObj((prevState) => {
            return {
              ...prevState,
              message: value,
            }
          })
        }}
      />
      <br />
      Country:
      <input 
        type='text'
        value={messageObj.country.text}
        onChange={(e) => {
          const value = e.target.value;
          // updater function
          setMessageObj((prevState) => {
            return {
              ...prevState,
              country: {
                ...prevState.country,
                text: value
              },
            }
          })
        }}
      />
    </div>
  )
}

export default State

/*
 - mutable: thay đổi trực tiếp giá trị ban đầu của 1 cái biến
 - immutable: không thay đổi trực tiếp giá trị ban đầu của 1 cái biến
const number = 1;

function increaseNumber(param1) {
  const newNumber = param1;
  return newNumber + 1;
}
const resIncrenNumer = increaseNumber(number)
resIncrenNumer = 2
number = 1;


function isOdd(param) {
  return number % 2 === 0;
} // true

isOdd(number) // true
*/

/* merge object & replace object


// so sanh tham trị - so sánh giá trị: number, string, boolean
const a = 1; // memory A
const b = 1; // memory B

a === b; // true

// so sanh tham chiếu - so sanh vùng nhớ: object, array
const objA = {}; // memory A
const objB = {}; // memory B
const objC = objA; // memory A

objA === objB; // false 
objA === objC; // true 

objC.name = 'John';
objC = { name: 'John'}
objA = { name: 'John'}


*/