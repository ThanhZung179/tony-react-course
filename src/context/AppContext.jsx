import React from 'react';

export const AppContext = React.createContext();

// same global state app
export const AppProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light');
  const [users, setUsers] = React.useState({
    firstName: 'truong'
  })


  function handleChangeTheme(name) {
    setTheme(name)
  }

  console.log("AppProvider", { theme })

  return (
    <AppContext.Provider 
      value={{
        // states
        theme,
        users,
        // actions
        handleChangeTheme,
        setUsers
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => React.useContext(AppContext);