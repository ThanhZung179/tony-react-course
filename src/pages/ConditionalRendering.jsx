import React from 'react'
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import Button from '../components/Button';

function ConditionalRendering() {
  const [isAuth, setIsAuth] = React.useState(false);
  let renderButton = null;

  if(isAuth) {
    renderButton = <LogoutButton /> 
  } else {
    renderButton = <LoginButton />
  }

  return (
    <div>
      <Button  
        text="Login Auth"
        handleClick={() => setIsAuth(prevState => !prevState)}
      />
      <br />

      {isAuth && <div>authenticated</div>}
      <div
        className={isAuth ? 'blue' : 'red'}
      >
        {isAuth ? 'logined' : 'not logined'}

      </div>
      {isAuth ? 'logined' : null}

      <br />
      Welcome to, {renderButton}
    </div>
  )
}
export default ConditionalRendering