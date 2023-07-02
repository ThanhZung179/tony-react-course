import React from 'react'
import { connect, useDispatch } from 'react-redux';
import Button from '../components/Button';

// action creators
import { setTheme } from '../reducers/app.actions';

function mapDispatchToProps(dispatch) {
  return {
    setThemeMapDispatch: payload => dispatch(setTheme(payload))
  }
}

function ComposeComponent({ setThemeMapDispatch }) {
  const dispatch = useDispatch();

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  
  function handleChangeTheme() {
    // setThemeMapDispatch('dark'); // redux pure
    dispatch(setTheme('dark'))
  }

  return (
    <div>
      ComposeComponent

      Change Theme:  <Button text="Change Theme" handleClick={handleChangeTheme} />

    </div>
  )
}

export default connect(null, mapDispatchToProps)(ComposeComponent)