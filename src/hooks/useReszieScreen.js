import React from 'react'

function useReszieScreen() {
  const [onSmalll, setOnSmall] = React.useState(false);
  
  function checkScreen() {
    setOnSmall(window.innerWidth < 768)
  }

  React.useEffect(() => {
    window.addEventListener('resize', checkScreen)

    return () => {
      window.removeEventListener('resize')
    }
  }, [])
  
  return {
    onSmalll
  }
}

export default useReszieScreen