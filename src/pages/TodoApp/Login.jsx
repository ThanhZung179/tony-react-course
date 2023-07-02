import React from 'react'
import { useDispatch } from 'react-redux'

// components
import Button from '../../components/Button';

// actions
import { authenticated, setUser } from '../../reducers/app.actions';

function Login() {
  const [form, setForm] = React.useState({
    userName: '',
  })
  const dispatch = useDispatch();
  
  function onChange(e) {
    setForm(prevState => {
      return {
        ...prevState,
        userName: e.target.value
      }
    })
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(setUser({
      firstName: form.userName,
      lastName: 'tony'
    }))

    dispatch(authenticated())
  }

  return (
    <div>
      <h3>Login</h3>

      <form onSubmit={onSubmit}>
        userName: <input type='text' value={form.userName} onChange={onChange} /> <br />

        <Button 
          type="submit"
          text="Submit"
        />
      </form>
    </div>
  )
}

export default Login