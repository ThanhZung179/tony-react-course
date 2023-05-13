import React from 'react'

function FormSubmit() {

  function onSubmit(e) {
    e.preventDefault();
    console.log("onSubmit")
  }

  function onClickButton() {
    console.log("onClickButton")
  }

  return (
    <div>
      <h4>Form Submit</h4>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">First Name</label>
        <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" />
        <label htmlFor="name">Last Name</label>
        <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" />
        
        {/* delegate event to form submit */}
        <button type='submit'>Submit</button>

        {/* button event independent */}
        {/* <button type='button' onClick={onClickButton}>Submit</button> */} 
      </form>

    </div>
  )
}

export default FormSubmit