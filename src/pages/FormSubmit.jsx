/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { connect } from 'react-redux';
import React from 'react';

// hooks
import useReszieScreen from '../hooks/useReszieScreen';

// actions
import { setUser } from '../reducers/app.actions';

function mapDispatchToProps(dispatch) {
  return {
    setUser: payload => dispatch(setUser(payload))
  }
}

function FormSubmit({ setUser }) {
  const { onSmalll } = useReszieScreen();
  const [form, setForm] = React.useState({
    firstName: '',
    lastName: ''
  })

  function onSubmit(e) {
    e.preventDefault();
    setUser({
      firstName: form.firstName,
      lastName: form.lastName
    })
  }

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setForm(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <div>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: onSmalll ? 'blue' : 'red'
        }}
      >
        {onSmalll ? "small" : "large"}
      </div>
      <h4>Form Submit</h4>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">First Name</label>
        <input 
          type="text" 
          id="firstName" 
          name="firstName" 
          value={form.firstName} 
          placeholder="Enter your first name" 
          onChange={handleChangeInput}
        />
        <label htmlFor="name">Last Name</label>
        <input 
          type="text" 
          id="lastName" 
          name="lastName" 
          value={form.lastName}  
          placeholder="Enter your last name" 
          onChange={handleChangeInput}
        />
        
        {/* delegate event to form submit */}
        <button type='submit'>Submit</button>
        {/* button event independent */}
        {/* <button type='button' onClick={onClickButton}>Submit</button> */} 
      </form>

    </div>
  )
}

export default connect(null, mapDispatchToProps)(FormSubmit)