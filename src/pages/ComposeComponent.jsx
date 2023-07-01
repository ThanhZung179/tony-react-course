import React from 'react'
import { connect } from 'react-redux';
import Button from '../components/Button';
import { setTheme } from '../reducers/app.actions';

function mapDispatchToProps(dispatch) {
  return {
    setTheme: payload => dispatch(setTheme(payload))
  }
}

function ComposeComponent({ setTheme }) {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  
  return (
    <div>
      ComposeComponent

      Change Theme:  <Button text="Change Theme" handleClick={() => setTheme('dark')} />

    </div>
  )
}

export default connect(null, mapDispatchToProps)(ComposeComponent)