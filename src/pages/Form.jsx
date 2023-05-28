import React from 'react'

function Form() {
  // states
  const [name, setName] = React.useState('');
  const [form, setForm] = React.useState({
    gender: 'male',
    firstName: '',
    lastName: '',
    bio: ''
  })
  const [users, setUsers] = React.useState([])
  // refs
  const firstNameRef = React.useRef();


  function onSubmit(e) {
    e.preventDefault();
    console.log('submit: ', {
      uncontrlledComponent: firstNameRef.current.value,
      controllerComponent: name,
      form
    })
    setUsers(prevState => {
      const userItem = {...form}; // shallow clone
      return [...prevState, userItem] // push a item into array
      // return prevState.concat([userItem])
    })
  }

  function onChangeName(e) {
    setName(e.target.value)
  }

  function onChangeForm(e) {
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
      
      {/* Uncontroller component */}
      Uncontroller input: <input type="text" defaultValue="tony" ref={firstNameRef} /> <br />
      Controller input: <input type="text" value={name} onChange={onChangeName} /> <br/>

      <form onSubmit={onSubmit}>
        Gender: 
        <select name="gender" value={form.gender} onChange={onChangeForm}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        First Name: <input type="text" name="firstName" value={form.firstName} onChange={onChangeForm} /> <br/>
        Last Name: <input type="text" name="lastName" value={form.lastName} onChange={onChangeForm} /> <br/>
        Bio: <input type="text" name="bio" value={form.bio} onChange={onChangeForm} /> <br/>

        <br />
        <button type="submit">Submit</button>

        {users.length > 0 ? (
          <>
            {users.map(user => {
              return (
                <div>
                  First Name: {user.firstName} <br/>
                  Last Name: {user.lastName}
                </div>
              )
            })}
          </>
        ) : (
          <div>please add user</div>
        )}
      </form>
      


    </div>
  )
}

export default Form