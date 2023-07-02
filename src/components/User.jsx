import React from 'react'
import { useSelector } from 'react-redux'

// selector
import { userSelector } from '../reducers/app.selector'

function User() {
  const user = useSelector(userSelector);
  
  return (
    <div>User: {user?.firstName}</div>
  )
}

export default User