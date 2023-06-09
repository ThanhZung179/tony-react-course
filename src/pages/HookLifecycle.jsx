import React from 'react';

function CheckUnmount() {
  React.useEffect(() => {
    return () => {
      console.log("useEffect cleanup CheckUnmount")
    }
  })

  React.useLayoutEffect(() => {
    return () => {
      console.log("useLayoutEffect clean up CheckUnmount")
    }
  })

  return (
    <div>check umounting</div>
  )
}

function HookLifecycle() {
  const [number, setNumber] = React.useState(Date.now());
  const [isAuth, setIsAuth] = React.useState(true)

  React.useEffect(() => {
    console.log("useEffect hook lifecycle")

    return () => {
      console.log("useEffect cleanup hook lifecycle")
    }
  })

  React.useLayoutEffect(() => {
    console.log("useLayoutEffect hook lifecycle")

    return () => {
      console.log("useLayoutEffect clean up hook lifecycle")
    }
  })


  function handleForceUpdate() {
    setNumber(Date.now())
  }

  function handleCheckUnmounting() {
    setIsAuth(prevState => !prevState)
  }

  console.log('---------------------')
  console.log('render hook lifecycle')

  return (
    <div>
      HookLifecycle: {number}<br />
      <button type="button" onClick={handleForceUpdate}>Force Update</button>
      <button type="button" onClick={handleCheckUnmounting}>Check Unmounting</button>

      {isAuth && <CheckUnmount />}
    </div>
  )
}

export default HookLifecycle