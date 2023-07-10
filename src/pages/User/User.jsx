import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function User() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Information</h1>
      <div>
        First Name: Tony <br />
        Last Name: Nguyen
      </div>

      <h4>Navigate</h4>

      <Link to="/user/profile">Profile</Link> {' | '}
      <Link to="/user/account">Account</Link> {' | '}
      <Link to="/user/123">User Detail</Link>
      <br />
      <button type="text" onClick={() => navigate('/user', { replace: true })}>Redirect to user page</button>
      <br />

      <Outlet />
    </div>
  )
}

export default User