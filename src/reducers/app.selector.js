import { createSelector } from "reselect"

export const themeSelector = createSelector(
  state => state.app,
  app => app.theme
)

const userState = state => state.app.user;
const themeState = state => state.app.theme;

export const showColorSelector = createSelector(userState, themeState, (user, theme) => {
  if(user?.name === 'John Doe' && theme === 'light') {
    return true
  }

  return false;
})

export const userSelector = createSelector(userState, user => user);

export const isAuthSelector = createSelector(
  state => state.app.isAuth, 
  isAuth => isAuth
);