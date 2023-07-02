import React from 'react'
import PropTypes from 'prop-types';

// destructuring javascript
// default paramater
// rename destructuring
function Props({ title = 'Learn React', age, user, renderButton, renderButtonType: RenderButtonType, children, ...props}) {

  console.log('props: ', props)

  return (
    <div>
      Title: {title} <br />
      Age: {age}  <br />
      User: {user.age}  <br />
      Render React Element:  {renderButton}  <br />
      Render React Type: <RenderButtonType /> <br />
      <br /> 
      {children}
    </div>
  )
}

export default Props

Props.propTypes = {
  title: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  user: PropTypes.shape({
    age: PropTypes.number
  }),
  renderButton: PropTypes.element,
  renderButtonType: PropTypes.elementType,
  children: PropTypes.node
}