import React from 'react'
import {  useParams } from 'react-router-dom'

function UserDetail() {
  const params = useParams();
  console.log("UserDetail: ", params)
  return (
    <div>
      <h1>UserDetail</h1>
     
    </div>
  )
}

export default UserDetail