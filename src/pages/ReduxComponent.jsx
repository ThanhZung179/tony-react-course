/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { connect, useSelector } from 'react-redux'

// selector
import { themeSelector, showColorSelector } from '../reducers/app.selector';

function mapStateToProps(state, ownProps) {
  console.log('state: ', {state, ownProps})
  const user = state.app.user;
  // let message = '';
  // if(user?.firstName === ownProps.firstName) {
  //   message = 'exactly user'
  // }


  return {
    user,
    // message
  }
}

function ReduxComponent({ user, firstName }) {
  // redux hooks
  const theme = useSelector(themeSelector);
  const displayLogicSelector = useSelector(showColorSelector);

  console.log('Redux hooks state: ', { theme, displayLogicSelector })


  let message = '';
  if(user?.firstName === firstName) {
    message = 'exactly user'
  }
  console.log('ReduxComponent: ', user)

  return (
    <div>
      ReduxComponent <br />
      {user ? 'has user' : 'no user'}
      {message}
    </div>
  )
}

export default connect(mapStateToProps)(ReduxComponent)