/* eslint-disable react/prop-types */
import React from 'react'

// destructuring javascript
// default paramater
function Props({ title = 'Learn React', age, user, renderNumber, buttonComponent, children, ...props}) {

  console.log('props: ', props)

  return (
    <div>
      Title: {title} <br />
      Age: {age}  <br />
      User: {user.age}  <br />
      Render Element:  {renderNumber}  <br />
      Button: {buttonComponent} < br />
      Count: {props.count}

      <br /> 
      {children}
    </div>
  )
}

export default Props