import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Account() {
  const location = useLocation();

  console.log("Account hooks router: ", location)

  return (
    <div>
      <h4>
        Account Page


      </h4>
    </div>
  )
}

export default Account